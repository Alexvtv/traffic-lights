import { createApp } from 'vue'
import App from './App.vue'
import Red from './components/Red.vue'
import Yellow from './components/Yellow.vue'
import Green from './components/Green.vue'
import { createWebHistory, createRouter } from "vue-router";

const routes = [
	{ path: '/red', component: Red, alias: '/' },
	{ path: '/yellow', component: Yellow },
	{ path: '/green', component: Green },
]

const router = createRouter({
	history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#root')

