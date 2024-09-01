import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importez les styles de Bootstrap
import 'bootstrap'; // Importez les composants JavaScript de Bootstrap si nécess

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.mount('#app');
