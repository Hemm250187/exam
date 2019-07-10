import {login} from '../services/index'
import {setToken,getToken} from '../utils/index'
import {routerRedux} from 'dva/router'
export default {
  // 命名空间
  namespace: 'login',

  // 模块的状态
  state: {
    isLogin: -1
  },

//订阅

subscriptions:{
  setup({dispatch,history}){
    return history.listen(({pathname})=>{
      if(pathname.indexOf('/login')==-1){
        if(!getToken()){
          dispatch(routerRedux.replace({
            pathname:`/login`,
            search:`?redirect=${encodeURIComponent(pathname)}`
          }))
        }
      }else{
        if(getToken()){
          dispatch:`/`
        }
      }
    })
  }
},

  // 异步操作
  effects: {
    *login({ payload, type }, {call, put}){
      console.log('payload...', payload, type)
      let data = yield call(login, payload);
      console.log('data...', data);
        if(data.code==1){
          setToken(data.token)
        }
      // 调用reduce改变登陆状态
      yield put({
        type: 'updateLogin',
        payload: data.code
      })
    }
  },

  // 同步操作
  reducers: {
    updateLogin(state, action) {
      return { ...state, isLogin: action.payload };
    },
  },

};
