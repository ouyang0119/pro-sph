import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../pages/Home/HomeIndex.vue'
import Search from '../pages/Search/SearchIndex.vue'
import Login from '../pages/Login/LoginIndex.vue'
import Register from '../pages/Register/RegisterIndex.vue'

let orignPush = VueRouter.prototype.push
let orignReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function(location, resolve, reject) {
	if (resolve && reject) {
		orignPush.call(this, location, resolve, reject)
	} else {
		orignPush.call(this, location, () => {}, () => {})
	}
}
VueRouter.prototype.replace = function(location, resolve, reject) {
	if (resolve && reject) {
		orignReplace.call(this, location, resolve, reject)
	} else {
		orignReplace.call(this, location, () => {}, () => {})
	}
}
export default new VueRouter({
	routes: [{

			path: "/home",
			component: Home,
			meta: {
				show: true
			}
		},
		{
			path: "/search/:keyword",
			component: Search,
			meta: {
				show: true
			},
			name: "search"
		},
		{
			path: "/login",
			component: Login,
			meta: {
				show: false
			}
		},
		{
			path: "/register",
			component: Register,
			meta: {
				show: false
			}
		}, {
			path: '*',
			redirect: '/home'
		}
	]
})
