import styles from './styles.module.scss'
import {useForm, useRequestData} from 'hooks'
import * as api from 'services/api'
import {getCategorys} from 'utils/helpers'
import SearchInput from 'components/SearchInput'
import Restaurants from 'components/Restaurants'
import Category from 'components/Category'
import PurchaseProgress from 'components/PurchaseProgress'

const Home = () => {
  const {form, setForm, register} = useForm({search: '', category: ''})
  const [restaurants, isLoading, isError] = useRequestData(
    api.getRestaurants,
    [],
    {selectProp: 'restaurants'}
  )
  const [order, orderLoading, orderError] = useRequestData(
    api.getActiveOrder,
    {},
    {selectProp: 'order'}
  )

  const categorys = getCategorys(restaurants)
  const search = r => !form.search || RegExp(form.search, 'i').test(r.name)
  const category = r => !form.category || r.category === form.category
  const list = restaurants.filter(search).filter(category)
  const resetCategory = () => setForm({...form, category: ''})

  return (
    <div className={styles.container}>
      <SearchInput
        type={'search'}
        placeholder={'Pesquisa'}
        img='/icons/search.svg'
        {...register('search')}
      />
      <Category {...{categorys, register, resetCategory}} />
      <Restaurants {...{list, isLoading}} />
      {!orderLoading && order?.totalPrice && <PurchaseProgress {...order} />}
    </div>
  )
}

export default Home
