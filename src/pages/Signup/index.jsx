import Button from 'components/Button'
import Input from 'components/Input'
import {ThemeContext} from 'contexts/theme'
import {useGo, useForm} from 'hooks'
import {useEffect} from 'react'
import {useContext} from 'react'
import * as api from 'services/api'
import styles from './styles.module.scss'

const Signup = () => {
  const go = useGo()
  const {form, register} = useForm({name: ''})

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
        <Input
          label='Nome*'
          placeholder='Nome e sobrenome'
          {...register('name')}
        />
        <Input
          label='Email*'
          type='email'
          placeholder='email@email.com'
          {...register('email')}
        />
        <Input label='CPF*' placeholder='000.000.000-00' {...register('cpf')} />
        <Input
          label='Senha*'
          type='password'
          placeholder='Mínimo 6 caracteres'
          {...register('password')}
        />
        <Input
          label='Confirmar*'
          type='password'
          placeholder='Confirmar a senha anterior'
          {...register('passwordConfirm')}
        />
        <Button label='Criar' />
      </form>
    </div>
  )
}

export default Signup
