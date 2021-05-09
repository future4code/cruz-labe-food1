import Button from 'components/Button'
import Header from 'components/Header'
import Input from 'components/Input'
import {NavLink} from 'react-router-dom'
import styles from './styles.module.scss'
import * as api from 'services/api'
import {useGo, useForm} from 'hooks'

const Login = () => {
  const {form, register} = useForm({})
  const go = useGo()

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(form)
    const r = await api.login({...form})
    console.log(r)
    if (r?.message) return console.log('Erro: ', r.message)

    console.log(r)
    localStorage.setItem('token', r.token)
    r.user.hasAddress ? go.home() : go.address()
  }

  return (
    <div className={styles.container}>
      <Header title='Entrar' showLogo />
      <form action='' onSubmit={handleSubmit} className={styles.form}>
        <Input
          {...register('email')}
          label='E-mail*'
          placeholder='email@email.com'
        />
        <Input
          {...register('password')}
          label='Senha*'
          placeholder='Mínimo 6 caracteres'
          type='password'
          img='/icons/password.svg'
        />
        <Button label = "Entrar">Entrar</Button>
        <p className={styles.text}>
          Não possui cadastro? <NavLink to='/signup'>Clique aqui.</NavLink>
        </p>
      </form>
    </div>
  )
}

export default Login
