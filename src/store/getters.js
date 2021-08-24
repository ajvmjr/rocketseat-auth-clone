export default {
  isAuthenticated: state => state.token != null,
  toast: state => state.toast
}