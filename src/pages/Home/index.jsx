import styles from './styles.module.scss'
import {name} from 'constants/project'
import {useForm, useRequestData, useProtectedPage} from 'hooks'
import SearchInput from 'components/SearchInput'
import {useContext, useEffect} from 'react'
import * as api from 'services/api'
import Restaurants from 'components/Restaurants'
import Category from 'components/Category'
import {ThemeContext} from 'contexts/theme'
import {getCategorys} from 'utils/helpers'

const Home = () => {
  useProtectedPage()
  const theme = useContext(ThemeContext)
  const {form, register} = useForm({search: '', category: ''})
  const [restaurants, isLoading, isError] = useRequestData(
    api.getRestaurants,
    [],
    {selectProp: 'restaurants'}
  )

  useEffect(() => theme.setHeaderOptions({title: name}), [])

  const categorys = getCategorys(restaurants)

  const search = r => !form.search || RegExp(form.search, 'i').test(r.name)
  const category = r => !form.category || r.category === form.category
  const list = restaurants.filter(search).filter(category)

  console.table(form)

  return (
    <div className={styles.container}>
      <SearchInput
        type={'search'}
        placeholder={'Pesquisa'}
        img='/icons/search.svg'
        {...register('search')}
      />
      <Category {...{categorys, register}} />
      <Restaurants {...{list, isLoading}} />
    </div>
  )
}

export default Home
