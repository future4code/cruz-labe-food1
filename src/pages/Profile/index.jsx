import styles from './styles.module.scss'
import BottomTabNav from 'components/BottomTabNav'
import Header from 'components/Header'
// import {useEffect, useState} from 'react'
import * as api from 'services/api'
import UserInfo from 'components/UserInfo'
import UserAddress from 'components/UserAddress'
import History from 'components/History'
import {useRequestData} from 'hooks/useRequest'

const Profile = () => {
  // const [user, setUser] = useState({})
  const [user, isLoading, isError] = useRequestData(
    api.getProfile,
    {},
    {selectProp: 'user'}
  )

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
      <BottomTabNav />
    </div>
  )
}

export default Profile
