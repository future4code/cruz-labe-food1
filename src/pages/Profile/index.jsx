import styles from './styles.module.scss'
import BottomTabNav from 'components/BottomTabNav'
import {useEffect, useState} from 'react'
import * as api from 'services/api'
import UserInfo from 'components/UserInfo'
import UserAddress from 'components/UserAddress'
import History from 'components/History'
import { useContext } from 'react'
import { ThemeContext } from 'contexts/theme'

const Profile = () => {
  const [user, setUser] = useState({})
  const theme = useContext(ThemeContext)

  useEffect(() => {
    const getData = async () => {
      const r = await api.getProfile()
      if (r?.message) {
        return console.log('Falhou', r.message)
      }
      setUser(r.user)
    }
    getData()
    theme.setHeaderOptions({title: "Meu perfil"})
  }, [])

  return (
    <div className={styles.container}>
      <UserInfo {...user} />
      <UserAddress address={user.address} title='Endereço cadastrado' />
      <History />
      <BottomTabNav />
    </div>
  )
}

export default Profile
