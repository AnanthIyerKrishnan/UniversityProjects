// main implementation of the vue-router
import { createRouter, createWebHistory } from "vue-router";
// placeholder for store import

// end store placeholder
// import main vue components
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Films from "./components/Films.vue";
import FilmDetails from "./components/FilmDetails.vue";
import CreateReview from "./components/CreateReview.vue";
import Signup from "./components/Signup.vue";
import Account from "./components/Account.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Home },
        { path: "/account", component: Account },
        { path: "/login", component: Login },
        { path: "/films", component: Films },
        {
            path: "/films/:pk", component: FilmDetails,
            children: [{ path: "review", component: CreateReview }]
        },
        { path: "/signup", component: Signup },
        // invalid route tbd
    ]
});
export default router;