import Alert from 'components/Alert'
import Button from 'components/Button'
import Input from 'components/Input'
import {useForm} from 'hooks'
import {useGo} from 'hooks/useGo'
import {useRequestData} from 'hooks/useRequest'
import {useEffect, useRef} from 'react'
import * as api from 'services/api'
import styles from './styles.module.scss'

const EditAddress = () => {
  const {form, setForm, register, error, verifyErrors, verifyAll} = useForm({})
  const go = useGo()
  const [
    userAddress,
    isLoadingUser,
    isErrorUser,
    getFullAddress,
    setIsErrorUser,
  ] = useRequestData(api.getFullAddress, {}, {selectProp: 'address'})
  const [
    newAddress,
    isLoading,
    isError,
    updateAddress,
    setIsError,
  ] = useRequestData(api.address, {}, {selectProp: 'user', wait: true})

  useEffect(() => {
    !isLoadingUser && userAddress?.street && setForm({...userAddress})
  }, [userAddress, isLoadingUser, setForm])

  const handleUpdate = async e => {
    e.preventDefault()
    if (verifyAll())
      return setIsError({message: 'Informe corretamente os campos'})
    const user = await updateAddress(form)
    if (!isError && user?.hasAddress) setTimeout(go.profile, 3000)
  }
  return (
    <form className={styles.container} onSubmit={handleUpdate}>
      <Input
        type='text'
        label='Logradouro*'
        placeholder='Rua / Av.'
        warning='Insira endereço válido, min 6 max 20 characteres'
        {...register('street', {validate: /^.{6,20}$/})}
      />
      <Input
        type='text'
        label='Número*'
        placeholder='Número'
        warning='Informar apenas números, 1 a 5 dígitos'
        {...register('number', {validate: /^\d{1,5}$/})}
      />
      <Input
        type='text'
        label='Complemento*'
        placeholder='Apto. / Bloco'
        warning='Informações adicionais para achar seu endereço'
        {...register('complement', {validate: /^.{0,20}$/})}
      />
      <Input
        type='text'
        label='Bairro'
        placeholder='Bairro'
        warning='Nome do seu bairro, mínimo 2 e máximo 12 characteres'
        {...register('neighbourhood', {validate: /^.{2,12}$/})}
      />
      <Input
        type='text'
        label='Cidade*'
        placeholder='City'
        warning='Nome da sua cidade, mínimo 2 e máximo 12 characteres'
        {...register('city', {validate: /^.{2,12}$/})}
      />
      <Input
        type='text'
        label='Estado*'
        placeholder='Estado'
        warning='Nome ou UF do seu estado, mínimo 2 e máximo 12 characteres'
        {...register('state', {validate: /^.{2,12}$/})}
      />
      <Button
        label='Salvar'
        type='button'
        action={handleUpdate}
        disabled={verifyErrors()}
        loading={isLoading}
      />
      {newAddress?.hasAddress && (
        <Alert success message='Endereço atualizado com sucesso!' />
      )}
      {isError && <Alert {...{...isError, setIsError}} />}
      {isErrorUser && (
        <Alert {...{...isErrorUser, setIsError: setIsErrorUser}} />
      )}
    </form>
  )
}

export default EditAddress
