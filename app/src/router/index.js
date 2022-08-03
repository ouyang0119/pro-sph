import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Home from '../pages/Home'
import Search from '../pages/Search'
import Login from '../pages/Login'
import Register from '../pages/Register'

//需要重写VueRouter.prototype原型对象身上的push|replace方法
//先把VueRouter.prototype身上的push|replace方法进行保存一份

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

//第一个形参：路由跳转的配置对象（query|params）
//第二个参数：undefined|箭头函数（成功的回调）
//第三个参数:undefined|箭头函数（失败的回调）
//push方法传递第二个参数|第三个参数（箭头函数）
//originPush：利用call修改上下文，变为(路由组件.$router)这个对象，第二参数：配置对象、第三、第四个参数：成功和失败回调函数
//push方法没有产地第二个参数|第三个参数

VueRouter.prototype.push = function(location, resolve, reject) {
	if (resolve && reject) {
		originPush.call(this, location, resolve, reject);
	} else {
		originPush.call(this, location, () => {}, () => {});
	}
};
VueRouter.prototype.replace = function(location, resolve, reject) {
	if (resolve && reject) {
		originReplace.call(this, location, resolve, reject);
	} else {
		originReplace.call(this, location, () => {}, () => {});
	}
};

export default new VueRouter({
	routes: [{
		path: "/home",
		component: Home,
		meta: {
			show: true
		}
	}, {
		path: "/search/:keyword?",
		component: Search,
		meta: {
			show: true
		},
		name: "search",
	}, {
		path: "/login",
		component: Login,
		meta: {
			show: false
		}
	}, {
		path: "/register",
		component: Register,
		meta: {
			show: false
		}
	}, {
		path: '/',
		redirect: '/home'
	}]
})
