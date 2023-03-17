<script setup lang="ts">
import AuthForm from './components/AuthForm.vue'
import Navbar from './components/Navbar.vue'

</script>

<template>
  <Navbar style="margin-bottom: 100px" />
  <div style="margin-left: 30px; margin-right: 30px">
    <router-view />
  </div>
</template>
