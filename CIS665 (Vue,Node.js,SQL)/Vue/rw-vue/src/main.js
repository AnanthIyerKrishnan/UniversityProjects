import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';

// router
import myRouter from "./routes.js";
// store
import theStore from "./store.js";
//end store

axios.defaults.baseURL="http://localhost:5555";

// additional handling of store and router
const myApp=createApp(App);
myApp.use(myRouter);
myApp.use(theStore);
myApp.mount('#app')

