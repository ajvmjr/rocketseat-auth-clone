import axios from 'axios'
import { getStorage, setStorage, removeItemFromStorage } from '@/utils/storage'

export default {
  async signup({ commit, dispatch }, { email, password }){
    try {
      const { data } = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FIREBASE_KEY}`, {
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
      const { data } = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FIREBASE_KEY}`, {
        email,
        password,
        returnSecureToken: true
      })
      dispatch('setTokenInfo', data)
    } catch (e) {
      throw e
    }
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