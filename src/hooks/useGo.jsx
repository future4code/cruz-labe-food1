import {useHistory} from 'react-router-dom'

export const useGo = () => {
  const history = useHistory()

  const home = () => history.push('/')
  const login = () => history.push('/login')
  const signup = () => history.push('/signup')
  const address = () => history.push('address')
  const profile = () => history.push('/profile')
  const editInfo = () => history.push('/editinfo')
  const editaddress = () => history.push('/editaddress')
  const restaurant = id => history.push({pathname: `restaurant/${id}`})
  const cart = () => history.push('/cart')
  const back = () => history.goBack()

  return {
    home,
    login,
    signup,
    address,
    profile,
    editInfo,
    editaddress,
    restaurant,
    cart,
    back,
  }
}
