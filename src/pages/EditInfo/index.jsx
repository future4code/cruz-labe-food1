import Button from 'components/Button'
import Input from 'components/Input'
import {useForm} from 'hooks'
import {useGo} from 'hooks/useGo'
import {useRequestData} from 'hooks/useRequest'
import * as api from 'services/api'
import styles from './styles.module.scss'

const EditInfo = ({location: {state}}) => {
  const {name, email, cpf} = state
  const {form, register} = useForm({name, email, cpf})
  const go = useGo()
  const [data, isLoading, isError, request] = useRequestData(
    api.updateProfile,
    {},
    {selectProp: 'user', wait: true}
  )

  console.log({state})
  const handleForm = async e => {
    e.preventDefault()
    await request({form})
    go.profile()
  }
  return (
    <form className={styles.container} onSubmit={handleForm}>
      <Input label='Nome' {...register('name')} />
      <Input label='Email' {...register('email')} />
      <Input label='CPF' {...register('cpf')} />
      <Button label='Atualizar' />
      {isLoading && 'Atualizando...'}
    </form>
  )
}

export default EditInfo
