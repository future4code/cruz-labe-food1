import Button from 'components/Button'
import Input from 'components/Input'
import {NavLink} from 'react-router-dom'
import styles from './styles.module.scss'
import * as api from 'services/api'
import {useGo, useForm} from 'hooks'
import {useState} from 'react'
import {useRequestData} from 'hooks/useRequest'
import Alert from 'components/Alert'
import {Transition, CSSTransition} from 'react-transition-group'
import {useEffect} from 'react'
import {useContext} from 'react'
import {AuthContext} from 'contexts/auth'
import SplashScreen from 'components/SplashScreen'
import Loading from 'components/Loading'

const initialForm = {
  email: '',
  password: '',
}

const Login = () => {
  const {form, register, error, setError, verifyAll, success} = useForm(
    initialForm
  )
  const go = useGo()
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [login, isLoading, isError, getData, setIsError] = useRequestData(
    api.login,
    {},
    {
      selectProp: 'user',
      wait: true,
    }
  )
  const auth = useContext(AuthContext)
  console.log({isLoading})

  const handleSubmit = async e => {
    e.preventDefault()
    if (verifyAll() || isError) return
    // if (error.email || error.password) return
    const user = await getData(form)
    if (!isError && user?.name) {
      user.hasAddress ? go.home() : go.address()
    }
  }

  const showPassword = () => {
    setPasswordVisible(!passwordVisible)
  }

  return (
    <div className={styles.container}>
      <CSSTransition
        in={Boolean(isError)}
        timeout={1000}
        mountOnEnter
        unmountOnExit
      >
        <Alert {...{...isError, setIsError}} />
      </CSSTransition>
      <form action='#' onSubmit={handleSubmit} className={styles.form}>
        <Input
          {...register('email', {
            validate: /^\w+(\.?\w+){0,3}@\w+(\.\w+){1,2}$/,
          })}
          label='E-mail*'
          placeholder='email@email.com'
          warning='Insira um email valido por favor'
        />
        <Input
          {...register('password', {validate: /.{6,12}/gi})}
          label='Senha*'
          placeholder='Mínimo 6 caracteres'
          warning='Mínimo 6 caracteres e máximo 12'
          type={passwordVisible ? 'text' : 'password'}
          img={
            passwordVisible
              ? '/icons/password-visible.svg'
              : '/icons/password.svg'
          }
          showPassword={showPassword}
        />
        <Button
          label='Entrar'
          type='button'
          action={handleSubmit}
          disabled={error.email || error.password}
          loading={isLoading}
        >
          Entrar
        </Button>
        <p className={styles.text}>
          Não possui cadastro? <NavLink to='/signup'>Clique aqui.</NavLink>
        </p>
      </form>
      {/* {isLoading && (
        <div className={styles.loadingContainer}>
          <Loading />
          <p>Carregando...</p>
        </div>
      )} */}
    </div>
  )
}

export default Login
