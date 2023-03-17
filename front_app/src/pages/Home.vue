<script setup lang="ts">
import { ref, watchEffect, onMounted } from "vue"
import axios from '../axios'
import { useAuth } from '../composable/useAuth'

const { username } = useAuth()
const diskSpaceUsed = ref('')
const dbSize = ref('???')

const backups = ref(['tesssst'])

const formData = new FormData()

const submitFile = async() => {
  try {
    const response = await axios.post('user/files', formData, { 
      headers: {
        'Content-Type': 'multipart/form-data'
      } 
    })
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

const handleFileUpload = (event: any) => {
  const files = event?.target?.files

  for (const file of files) {
    console.log(file)
    formData.append(file.name, file)
  }
}

onMounted(async() => {
  const response = await axios.post('user/disk', {
    username: username.value
  })

  if (response.data) diskSpaceUsed.value = response.data.split("/")[0].trim()
})


watchEffect(() => {
  console.log(diskSpaceUsed.value)
})
</script>

<template>
  <div style="display: flex; gap: 80px; flex-direction: column">
    <div>
      <h1>Votre espace sur le serveur est: {{ username }}@20.36.129.219</h1>
    </div>
    <div>
      <h1>Les statistiques</h1>
      <p>Espace disque consommée: {{ diskSpaceUsed }}</p>
      <p>Taille de la base de donées: {{ dbSize }}</p>
    </div>
    
    <div>
      <h1>Vos backups</h1>
      <ul v-for="(backup, index) in backups" :key="index">
        <li>{{ backup }}</li>
      </ul>
    </div>
    
    <div>
      <h1>Importer vos fichiers</h1>
      <div class="card flex justify-content-center">
        <label>File
          <input type="file" id="file" @change="handleFileUpload"/>
          <!-- <input type="file" id="file" webkitdirectory directory @change="handleFileUpload"/> -->
        </label>
        <button @click="submitFile">Submit</button>
    </div>
    </div>
  </div>
</template>

