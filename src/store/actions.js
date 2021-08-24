import axios from 'axios'
import { getStorage, setStorage, removeItemFromStorage } from '@/utils/storage'

export default {
  async signup({ commit, dispatch }, { email, password }){
    try {
      const { data } = await axios.post(`${process.env.VUE_APP_BASE_URL}signUp?key=${process.env.VUE_APP_FIREBASE_KEY}`, {
        email,
        password,
        returnSecureToken: true
      })
      dispatch('setTokenInfo', data)
    } catch (e) {
      throw e
    }
  },
  async signin({ dispatch }, { email, password }){
    try {
      const { data } = await axios.post(`${process.env.VUE_APP_BASE_URL}signInWithPassword?key=${process.env.VUE_APP_FIREBASE_KEY}`, {
        email,
        password,
        returnSecureToken: true
      })
      dispatch('setTokenInfo', data)
    } catch (e) {
      throw e
    }
  },
  autoLogin({ dispatch }){
    const token = getStorage('token')
    const tokenExpiration = getStorage('tokenExpiration')

    if(!token || new Date().getTime() > +tokenExpiration){
      dispatch('logout')
      return
    }

    dispatch('setTokenInfo', { idToken: token, expiresIn: +tokenExpiration })
  },
  setTokenInfo({ commit }, data){
    commit('setToken', data.idToken)
    commit('setTokenExpiration', data.expiresIn)
    setStorage('token', data.idToken)
    setStorage('tokenExpiration', new Date().getTime() * Number.parseInt(data.expiresIn) * 1000)
  },
  logout({ commit }){
    commit('setToken', null)
    commit('setTokenExpiration', '')
    removeItemFromStorage('token')
    removeItemFromStorage('tokenExpiration')
  }
}