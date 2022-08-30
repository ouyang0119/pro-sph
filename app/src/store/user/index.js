import {
	reqGetCode,
	reqUserRegister,
	reqUserLogin,
	reqUserInfo
} from "@/api";
const state = {
	code: '',
	token: localStorage.getItem('TOKEN'),
	userInfo: {}
};
const mutations = {
	GETCODE(state, code) {
		state.code = code;
	},
	USERLOGIN(state, token) {
		state.token = token;
	},
	GETUSERINFO(state, userInfo) {
	  state.userInfo = userInfo;
	},
};
const actions = {
	async getCode({
		commit
	}, phone) {
		let result = await reqGetCode(phone);
		if (result.code == 200) {
			commit("GETCODE", result.data)
			return 'ok'
		} else {
			return Promise.reject(new Error('fail'));
		}
	},
	async userRegister({
		commit
	}, user) {
		let result = await reqUserRegister(user);
		if (result.code == 200) {
			return 'ok'
		} else {
			return Promise.reject(new Error("fail"))
		}
	},
	async userLogin({
		commit
	}, user) {
		let result = await reqUserLogin(user);
		if (result.code == 200) {
			commit("USERLOGIN", result.data.token)
			localStorage.setItem("TOKEN",result.data.token)
			return 'ok'
		} else {
			return Promise.reject(new Error('fail'))
		}
	},
	async getUserInfo({commit}) {
		let result = await reqUserInfo();
		console.log(result)
		if (result.code == 200) {
		  //提交用户信息
		  commit("GETUSERINFO", result.data);
		  return 'ok';
		}else{
		  return Promise.reject(new Error('fail'));
		}
	}
};
const getters = {

};
export default {
	state,
	mutations,
	actions,
	getters,
}
