import Button from 'components/Button'
import Header from 'components/Header'
import Input from 'components/Input'
import {useGo, useForm} from 'hooks'
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
      <Header title='Cadastrar' showLogo showArrow />
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
