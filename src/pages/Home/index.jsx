import Header from 'components/Header'
import styles from './styles.module.scss'
import {name} from 'constants/project'
import {useForm, useProtectedPage} from 'hooks'
import SearchInput from 'components/SearchInput'
import {useEffect, useState} from 'react'
import * as api from 'services/api'
import Restaurants from 'components/Restaurants'

const Home = () => {
  useProtectedPage()
  const {register} = useForm({search: ''})
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const getData = async () => {
      const r = await api.getRestaurants()
      console.log(r)
      r?.restaurants && setRestaurants(r?.restaurants)
    }
    getData()
  }, [])

  return (
    <>
      <Header title={name} />

      <div className={styles.container}>
        <SearchInput
          type={'search'}
          placeholder={'Pesquisa'}
          img='/icons/search.svg'
          {...register('search')}
        />
        <Restaurants restaurants={restaurants} />
      </div>
    </>
  )
}

export default Home
