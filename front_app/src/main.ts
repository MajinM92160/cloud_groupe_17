import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import InputText from 'primevue/inputtext'
import FileUpload from 'primevue/fileupload'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast';
import "primevue/resources/themes/saga-blue/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"

createApp(App)
.use(router)
.use(PrimeVue)
.use(ToastService)
.component('Button', Button)
.component('Menubar', Menubar)
.component('FileUpload', FileUpload)
.component('InputText', InputText)
.component('Toast', Toast)
.mount('#app')
