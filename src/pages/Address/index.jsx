import styles from './styles.module.scss'
import BottomTabNav from 'components/BottomTabNav'
import Input from 'components/Input'
import Header from 'components/Header'
import Button from 'components/Button'
import {useGo, useForm} from 'hooks'
import * as api from 'services/api'
import {useContext} from 'react'
import {ThemeContext} from 'contexts/theme'
import {useEffect} from 'react'
import {useRequestData} from 'hooks/useRequest'
import Alert from 'components/Alert'

const initialForm = {
  street: '',
  number: '',
  complement: '',
  neighbourhood: '',
  city: '',
  state: '',
}
const Address = () => {
  const go = useGo()
  const {form, register, error, setError, verifyAll, verifyErrors} = useForm(
    initialForm
  )
  const [data, isLoading, isError, getData, setIsError] = useRequestData(
    api.address,
    {},
    {
      selectProp: 'user',
      wait: true,
    }
  )

  const handleAddress = async e => {
    e.preventDefault()
    if (verifyAll()) return
    const user = await getData(form)
    if (!isError && user?.hasAddress) setTimeout(go.home, 3000)
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleAddress}>
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
          action={handleAddress}
          loading={isLoading}
          disabled={verifyErrors()}
        />

        {data?.hasAddress && (
          <Alert success message='Endereço adicionado com sucesso!' />
        )}
        {isError && <Alert {...{...isError, setIsError}} />}
      </form>
      {/* <BottomTabNav /> */}
    </div>
  )
}

export default Address
