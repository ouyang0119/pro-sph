
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
import home from './home'
import search from './search'
export default new Vuex.Store({
	modules:{
		home,search
	}
})