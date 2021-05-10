import Button from 'components/Button'
import Input from 'components/Input'
import {NavLink} from 'react-router-dom'
import styles from './styles.module.scss'
import * as api from 'services/api'
import {useGo, useForm} from 'hooks'
import {useEffect} from 'react'
import {useContext} from 'react'
import {ThemeContext} from 'contexts/theme'
import {useState} from 'react'

const initialForm = {
  email: '',
  password: '',
}

const Login = () => {
  const {form, register, error, success} = useForm(initialForm)
  const go = useGo()
  const theme = useContext(ThemeContext)
  const [passwordVisible, setPasswordVisible] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    const r = await api.login({...form})
    if (r?.message) return console.log('Erro: ', r.message)

    r.user.hasAddress ? go.home() : go.address()
  }

  const showPassword = () => {
    setPasswordVisible(!passwordVisible)
  }

  return (
    <div className={styles.container}>
      <form action='' onSubmit={handleSubmit} className={styles.form}>
        <Input
          {...register('email', {
            validate: /^\w+(\.?\w+){0,3}@\w+(\.\w+){1,2}$/,
          })}
          label='E-mail*'
          placeholder='email@email.com'
        />
        <Input
          {...register('password', {validate: /.{6,12}/gi})}
          label='Senha*'
          placeholder='Mínimo 6 caracteres'
          type={passwordVisible ? 'text' : 'password'}
          img={
            passwordVisible
              ? '/icons/password-visible.svg'
              : '/icons/password.svg'
          }
          showPassword={showPassword}
        />
        <Button label='Entrar'>Entrar</Button>
        <p className={styles.text}>
          Não possui cadastro? <NavLink to='/signup'>Clique aqui.</NavLink>
        </p>
      </form>
    </div>
  )
}

export default Login
