import Button from 'components/Button'
import Input from 'components/Input'
import { ThemeContext } from 'contexts/theme'
import {useGo, useForm} from 'hooks'
import { useEffect } from 'react'
import { useContext } from 'react'
import * as api from 'services/api'
import styles from './styles.module.scss'

const Signup = () => {
  const go = useGo()
  const {form, register} = useForm({name: ''})
  const theme = useContext(ThemeContext)

  useEffect(() => {
    theme.setHeaderOptions({showLogo: true,
                            title: 'Cadastrar',
                            showArrow: true})
  },[])

  const handleSignup = async e => {
    e.preventDefault()
    const {name, email, cpf, password} = form
    const r = await api.signup({name, email, cpf, password})
    console.log(r)
    go.address()
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSignup}>
        <Input label='Nome*' {...register('name')} />
        <Input label='Email*' type='email' {...register('email')} />
        <Input label='CPF*' {...register('cpf')} />
        <Input label='Senha*' type='password' {...register('password')} />
        <Input
          label='Confirmar*'
          type='password'
          {...register('passwordConfirm')}
        />
        <Button label='Criar' />
      </form>
    </div>
  )
}

export default Signup
