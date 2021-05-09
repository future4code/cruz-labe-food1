import styles from './styles.module.scss'
import BottomTabNav from 'components/BottomTabNav'
import {useEffect, useState} from 'react'
import Header from 'components/Header'
import * as api from 'services/api'
import UserInfo from 'components/UserInfo'
import UserAddress from 'components/UserAddress'
import History from 'components/History'
import { useContext } from 'react'
import { ThemeContext } from 'contexts/theme'
import {useRequestData} from 'hooks/useRequest'

const Profile = () => {
  const [user, isLoading, isError] = useRequestData(
    api.getProfile,
    {},
    {selectProp: 'user'}
  )
    const theme = useContext(ThemeContext)
    
    useEffect(() => {
    theme.setHeaderOptions({title: "Meu perfil"})
  }, [])
    

  return (
    <div className={styles.container}>
      <Header title='Meu perfil' showArrow />
      {isLoading ? (
        'Carregando...'
      ) : (
        <>
          <UserInfo {...user} />
          <UserAddress address={user.address} title='Endereço cadastrado' />
        </>
      )}
      <History />
    </div>
  )
}

export default Profile
