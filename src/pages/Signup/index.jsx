import Alert from 'components/Alert'
import Button from 'components/Button'
import Input from 'components/Input'
import {useGo, useForm} from 'hooks'
import {useRequestData} from 'hooks/useRequest'
import {useEffect} from 'react'
import {CSSTransition} from 'react-transition-group'
import * as api from 'services/api'
import {excludeProp} from 'utils/helpers'
import styles from './styles.module.scss'

const initialForm = {
  name: '',
  email: '',
  cpf: '',
  password: '',
  passwordConfirm: '',
}

const Signup = () => {
  const go = useGo()
  const {form, register, error, setError, verifyAll, verifyErrors} = useForm(
    initialForm
  )
  const [data, isLoading, isError, getData, setIsError] = useRequestData(
    api.signup,
    {},
    {selectProp: 'user', wait: true}
  )

  useEffect(() => {
    if (
      !error.passwordConfirm &&
      form.password !== form.passwordConfirm &&
      form.passwordConfirm
    ) {
      return setError({...error, passwordConfirm: true})
    }
  }, [form.password, form.passwordConfirm, error, setError])

  const handleSignup = async e => {
    e.preventDefault()
    if (verifyAll() || isError) return
    const data = excludeProp(form, 'passwordConfirm')
    console.log({data})
    const user = await getData(data)
    if (!isError && user?.name) {
      setTimeout(go.address, 3000)
    }
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
      <CSSTransition
        in={Boolean(data?.name)}
        timeout={300}
        mountOnEnter
        unmountOnExit
      >
        <Alert success message='Conta cadastrada, informe seu endereço' />
      </CSSTransition>
      <form className={styles.form} onSubmit={handleSignup}>
        <Input
          label='Nome*'
          placeholder='Nome e sobrenome'
          warning='Escreva nome e sobrenome corretamente'
          {...register('name', {
            validate: /^\w{2,12}(\s\w{2,12}){1,6}$/,
          })}
        />
        <Input
          label='Email*'
          type='email'
          placeholder='email@email.com'
          warning='Insira um email valido por favor'
          {...register('email', {
            validate: /^\w+(\.?\w+){0,3}@\w+(\.\w+){1,2}$/,
          })}
        />
        <Input
          label='CPF*'
          placeholder='000.000.000-00'
          warning='Insira um CPF com 11 dígitos'
          {...register('cpf', {
            validate: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
            mask: '___.___.___-__',
          })}
        />
        <Input
          label='Senha*'
          type='password'
          placeholder='Mínimo 6 caracteres'
          warning='Mínimo 6 caracteres e máximo 12'
          {...register('password', {validate: /.{6,12}/gi})}
        />
        <Input
          label='Confirmar*'
          type='password'
          placeholder='Confirmar a senha anterior'
          warning='Repita a mesma senha'
          {...register('passwordConfirm', {validate: /.{6,12}/gi})}
        />
        <Button
          type='button'
          label='Criar'
          action={handleSignup}
          disabled={verifyErrors()}
          loading={isLoading}
        />
      </form>
    </div>
  )
}

export default Signup
