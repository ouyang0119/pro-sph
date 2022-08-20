import {reqGetCode,reqUserRegister,reqUserLogin} from "@/api";
const state = {
	code:'',
	token:''
};
const mutations = {
	GETCODE(state,code){
		state.code=code;
	},
	USERLOGIN(state,token){
		state.token=token;
	}
};
const actions = {
	async getCode({commit},phone){
		let result=await reqGetCode(phone);
		if(result.code==200){
			commit("GETCODE",result.data)
			return 'ok'
		}else{
			return Promise.reject(new Error('fail'));
		}
	},
	async userRegister({commit},user){
		let result=await reqUserRegister(user);
		if(result.code==200){
			return 'ok'
		}else{
			return Promise.reject(new Error("fail"))
		}
	},
	async userLogin({commit},user){
		let result=await reqUserLogin(user);
		console.log(result)
		if(result.code==200){
			commit("USERLOGIN",result.data.token)
			return 'ok'
		}else{
			return Promise.reject(new Error('fail'))
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