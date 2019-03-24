import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		id: '123456',
		openedTab: ['index'],
		activeTab: '',
		load:false
	},
	getters:{
		"getload":(state)=>{
			return state.load
		}
	},
	mutations: {
		addTab (state, componentTitle) {
			state.openedTab.push(componentTitle)
		},
		changeTab (state, componentTitle) {
			state.activeTab = componentTitle
		},
		deductTab (state, componentTitle) {
			let index = state.openedTab.indexOf(componentTitle)
			state.openedTab.splice(index, 1)
		},
		"setload":(state,payload)=>{
			state.load=payload;
		}
	},
	actions: {
		setload(store,payload){
			store.commit("setload",payload)
		}
	},
})