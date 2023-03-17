<script setup lang="ts">
import { watchEffect } from 'vue'
import { useAuth } from '../composable/useAuth'

const { username } = useAuth()
watchEffect(() => {
  console.log(username.value)
})
</script>

<template>
  <nav style="background-color: white; height: 50px; width: 100%; color: black; display: flex; align-items: center; gap: 80px">
    <router-link to="/" style="margin-left: 10px">Home</router-link> |
    <p v-if="username">Bonjour {{ username }}</p>
    <router-link to="/register">Register</router-link>
    <router-link to="/login">Login</router-link>
  </nav>
</template>

