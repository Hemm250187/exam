import {
   getType,
   getClassPage
} from '../services/addText.js'

//import { routerRedux } from 'dva/router'
console.log(getType)
export default {
    //命名空间
    namespace: 'power',
    //模块状态
    state: {
        TypeList: [],
        ViewList: [],
        insertList: []
    },
    //订阅
    // subscriptions: {
    //     setup({ dispatch, history }) {  // eslint-disable-line
    //     },
    // },
    //异步操作
    effects: {
        // 获取所有试题类型
        *type({}, { call, put }) {
            let data = yield call(getType)
            console.log(data)
            yield put({
                type: "typeUpdata",
                payload: data.data
            })
        },
        //添加类型
        // *insertQuestion({ payload }, { call, put }) {
        //     let datas = yield call(insertQuestion, payload);
        //     console.log(datas);
        // },

        // 获取所有的试题
        *getClassPage({ payload}, { call, put }) {
            let data=yield call(getClassPage)
            console.log('getClassPage',data)
            yield put({
                type:"getData",
                payload:data.data
            })
         }
    },

    //同步操作
    reducers: {
        typeUpdata(state, { payload }) {
            return { ...state, TypeList: payload }
        },
        getData(state,{payload}){
            return {...state,ViewList:payload}
        }
    },

};
