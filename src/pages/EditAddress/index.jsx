import Button from 'components/Button'
import Input from 'components/Input'
import {useForm} from 'hooks'
import {useGo} from 'hooks/useGo'
import {useRequestData} from 'hooks/useRequest'
import {useEffect} from 'react'
import * as api from 'services/api'
import styles from './styles.module.scss'

const EditAddress = () => {
  const {form, setForm, register} = useForm({})
  const go = useGo()
  const [address, isLoading, isError, request] = useRequestData(
    api.getFullAddress,
    {},
    {selectProp: 'address'}
  )

  useEffect(() => !isLoading && setForm({...address}), [
    address,
    isLoading,
    setForm,
  ])

  const handleForm = async e => {
    e.preventDefault()
    await request({form})
    go.profile()
  }
  return (
    <form className={styles.container} onSubmit={handleForm}>
      <Input
        type='text'
        label='Logradouro*'
        placeholder='Rua / Av.'
        {...register('street')}
      />
      <Input
        type='text'
        label='Número*'
        placeholder='Número'
        {...register('number')}
      />
      <Input
        type='text'
        label='Complemento*'
        placeholder='Apto. / Bloco'
        {...register('complement')}
      />
      <Input
        type='text'
        label='Bairro'
        placeholder='Bairro'
        {...register('neighbourhood')}
      />
      <Input
        type='text'
        label='Cidade*'
        placeholder='City'
        {...register('city')}
      />
      <Input
        type='text'
        label='Estado*'
        placeholder='Estado'
        {...register('state')}
      />
      <Button label='Salvar' />

      {isLoading && 'Atualizando...'}
    </form>
  )
}

export default EditAddress
