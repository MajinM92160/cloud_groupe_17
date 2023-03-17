import { ref, watchEffect } from 'vue'

const isAuthenticated = ref(true)
const username = ref(localStorage.getItem('username') ?? '')

// watchEffect(() => {
//   console.log(localStorage.getItem('username'))
//   username.value = localStorage.getItem('username') ?? ''
// })

export const useAuth = () => {
  return { isAuthenticated, username }
}
