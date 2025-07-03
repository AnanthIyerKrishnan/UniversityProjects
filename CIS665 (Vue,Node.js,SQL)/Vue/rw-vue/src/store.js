import {createStore} from 'vuex';
import axios from 'axios';
import myRoutes from './routes.js';

export default createStore({
    // store has 3 sections

    // 1.state
    state:{
        token:null,
        user:null,
        films:[]
    },

    // 2.mutations
    mutations:{
        storeTokenInApp(state,myToken){
            console.log("calling storeToken mutator");
            state.token=myToken;
        },
        storeUserInApp(state,theUser){
            console.log("Calling storeUser mutator");
            state.user=theUser;
        },
        storeFilms(state,films){
            console.log("Calling mutator storeFilms");
            state.films=films;
        },
        clearAuthData(state){
            state.token=null;
            state.user=null;
        }
    },
    // 3.actions
    actions:{
        getFilms({commit}){
            axios.get("/films")
            .then((resp)=>{
                commit("storeFilms",resp.data);
            });
        },
        logout({commit,state}){
            axios.post("/contacts/logout",null,{
                headers:{Authorization:`Bearer ${state.token}`}
            })
            .then(()=>{
                commit("clearAuthData");
                myRoutes.replace("/");
            })
            .catch((err)=>{
                console.log("error in logout",err);
            });
        }
    }
})