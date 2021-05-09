import axios from 'axios'
import {apiURL as baseURL} from 'constants/project'
import interceptor from 'utils/interceptor'

const api = axios.create({baseURL})
interceptor(api)

const base = async args => {
  console.log('args recebidos', args)
  const token = localStorage.getItem('token')
  try {
    const r = await api({...args, headers: {auth: token}})
    r.data.token && localStorage.setItem('token', r.data.token)
    return r.data
  } catch (e) {
    // usar errorBoundary para mostrar erros em production
    console.error('error', e)
  }
}

export const login = async data => base({url: 'login', method: 'post', data})

export const signup = async data => base({url: 'signup', method: 'post', data})

export const address = async data => base({url: 'address', method: 'put', data})

export const getProfile = async () => base({url: 'profile'})

export const getRestaurants = async () => base({url: 'restaurants'})

export const getRestaurantDetail = async id => base({url: `restaurants/${id}`})

export const getFullAddress = async () => base({url: 'profile/address'})

export const updateProfile = async data => base({url: 'profile', method: 'put'})

export const placeOrder = async (data, id) =>
  base({url: `restaurants/${id}/order`})

export const getActiveOrder = async () => base({url: 'active-order'})

export const getHistory = async () => base({url: 'orders/history'})
