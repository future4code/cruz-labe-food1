import Alert from 'components/Alert'
import Button from 'components/Button'
import Input from 'components/Input'
import {useForm} from 'hooks'
import {useGo} from 'hooks/useGo'
import {useRequestData} from 'hooks/useRequest'
import * as api from 'services/api'
import styles from './styles.module.scss'

const EditInfo = ({location: {state}}) => {
  const {name, email, cpf} = state
  const {form, register, verifyErrors, verifyAll, changed} = useForm({
    name,
    email,
    cpf,
  })
  const go = useGo()
  const [data, isLoading, isError, request, setIsError] = useRequestData(
    api.updateProfile,
    {},
    {selectProp: 'user', wait: true}
  )

  const handleUpdate = async e => {
    e.preventDefault()
    if (verifyAll()) return setIsError({mesasge: 'Preencha todos os campos'})
    const r = await request(form)
    if (!isError && r?.name) {
      setTimeout(go.profile, 3000)
    }
  }

  return (
    <form className={styles.container} onSubmit={handleUpdate}>
      {data?.name && <Alert success message='Dados atualizados com sucesso!' />}
      {isError && <Alert {...{...isError, setIsError}} />}
      <Input
        label='Nome'
        placeholder='Nome e sobrenome'
        warning='Insira seu novo nome e sobrenome'
        {...register('name', {validate: /^\w{2,12}(\s\w{2,12}){1,6}$/})}
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
      <Button
        type='button'
        label='Atualizar'
        action={handleUpdate}
        disabled={!changed()}
        loading={isLoading}
      />
    </form>
  )
}

export default EditInfo
