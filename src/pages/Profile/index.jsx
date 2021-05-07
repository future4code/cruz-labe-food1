import styles from './styles.module.scss'
import BottomTabNav from 'components/BottomTabNav'
import Header from 'components/Header'
import {useEffect, useState} from 'react'
import api from 'services/api'
import UserInfo from 'components/UserInfo'
import UserAdress from 'components/UserAdress'
import CategoryTitle from 'components/CategoryTitle'
import HistoryCard from 'components/HistoryCard'
import History from 'components/History'
// import { useRequest } from "./hooks";

const Profile = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const getData = async () => {
      const r = await api.getProfile()
      if (r?.message) {
        return console.log('Falhou', r.message)
      }
      setUser(r.user)
    }
    getData()
  }, [])

  return (
    <div className={styles.container}>
      <Header title='Meu perfil' showArrow />
      <UserInfo {...user} />
      <UserAdress address={user.address} title='Endereço cadastrado' />
      <History />
      <BottomTabNav />
    </div>
  )
}

export default Profile
