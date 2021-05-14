import axios from 'axios'
import {apiURL as baseURL} from 'constants/project'
import interceptor from 'utils/interceptor'

const api = axios.create({baseURL})
interceptor(api)
export const source = axios.CancelToken.source()

const base = async args => {
  const token = localStorage.getItem('token')
  try {
    const r = await api({
      ...args,
      headers: {auth: token},
      cancelToken: source.token,
    })

    r.data.token && localStorage.setItem('token', r.data.token)
    return r.data
  } catch (e) {
    if (axios.isCancel(e)) {
      console.warn('request canceled', e.message)
    } else {
      // usar errorBoundary para mostrar erros em production
      console.error({e})
      return e.response?.data
    }
  }
}

export const login = async data => base({url: 'login', method: 'post', data})

export const signup = async data => base({url: 'signup', method: 'post', data})

export const address = async data => base({url: 'address', method: 'put', data})

export const getProfile = async () => base({url: 'profile'})

export const getRestaurants = async () => base({url: 'restaurants'})

export const getRestaurantDetail = async id => base({url: `restaurants/${id}`})

export const getFullAddress = async () => base({url: 'profile/address'})

export const updateProfile = async data =>
  base({url: 'profile', method: 'put', data})

export const placeOrder = async ({id, data}) =>
  base({url: `restaurants/${id}/order`, method: 'post', data})

export const getActiveOrder = async () => base({url: 'active-order'})

export const getHistory = async () => base({url: 'orders/history'})
