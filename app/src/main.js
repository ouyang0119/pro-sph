import Vue from "vue";

import App from './App.vue';

import TypeNav from './components/TypeNav';

import Carsousel from './components/Carsousel';

import Pagination from './components/Pagination'

Vue.component(TypeNav.name, TypeNav);

Vue.component(Carsousel.name, Carsousel);

Vue.component(Pagination.name, Pagination);

import router from "./router";

import store from './store';

import "swiper/css/swiper.css"

import '@/mock/mockServe';
new Vue({
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this;
	},
	router,
	store
}).$mount("#app");
