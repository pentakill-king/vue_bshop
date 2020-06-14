import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
 
 
    twpd:null,
    lists:null,
    discovery:null,
    onsell:null,
    recom:null,
    recomc:null,
    search:null,
    keyword:null,
}

const mutations={ 
    addkeyword(state,k){
        state.keyword=k
     },
    adddiscovery(state,k){
       state.discovery=k
    },
    addsearch(state,k){
        state.search=k
     },
     addonsell(state,k){
        state.onsell=k
     },
     addrecom(state,k){
        state.recom=k
     },
     addrecomc(state,k){
        state.recomc=k
     },
     addlists(state,k){
        state.lists=k
     },
     addgoods(state,k){
        state.goods=k
     }

  }

 


export default new Vuex.Store({
    state,
    mutations,
    // actions
    
})
