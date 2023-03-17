<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composable/useAuth'
import axios from '../axios'

const router = useRouter()
const { isAuthenticated, username } = useAuth()

const usernameInput = ref('')
const password = ref('')

watchEffect(() => {
  console.log('user', usernameInput.value)
})

const currentRoute = computed(() => {
  if (router.currentRoute.value.name === 'Register') return 'Register'
  if (router.currentRoute.value.name === 'Login') return 'Login'
})

const submit = async() => {
  if (!usernameInput.value || !password.value) {
    usernameInput.value = ''
    password.value = ''
    alert('Veuillez entrer toutes les infos')
    return
  }
  try {
    const response = await axios.post(`${currentRoute.value === 'Register' ? '/user/register' : ''}`, {
        username: usernameInput.value,
        password: password.value
    })

    const responseData = JSON.parse(response.data)
    if (responseData) {
      isAuthenticated.value = true
      localStorage.setItem('username', usernameInput.value)
      username.value = usernameInput.value
      router.push({name: 'Home'})
    }
  } catch (error) {
    console.error(error)
  }
}
</script>


<template>
  <div style="width: 100%; display: flex; align-items: center; flex-direction: column">
    <h1>{{ currentRoute }} page</h1>
    <div style="width: 500px">
      <div style="display: flex; flex-direction: column; margin-bottom: 10px">
        <label for="username">Username:</label>
        <InputText v-model="usernameInput" type="text" id="username" name="username" required />
      </div>
      <div style="display: flex; flex-direction: column; margin-bottom: 10px">
        <label for="pass">Password:</label>
        <InputText v-model="password" type="password" id="pass" name="password" required />
      </div>
      <Button type="submit" :label="currentRoute" @click="submit" />
    </div>
  </div>
</template>