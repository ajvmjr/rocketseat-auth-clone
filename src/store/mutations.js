export default {
  setToken: (state, payload) => state.token = payload,
  setTokenExpiration: (state, payload) => state.tokenExpiration = payload,
  setToast: (state, payload) => state.toast = { ...payload }
}