import {
    getType,
    getClassPage,
    getsubject,
    Allquestion
 } from '../services/addText.js'
 import { stat } from 'fs';
 
 //import { routerRedux } from 'dva/router'
 console.log(getType)
 export default {
     //命名空间
     namespace: 'power',
     //模块状态
     state: {
         TypeList: [],
         subjects:[],
         insertList: [],
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
          },
          *getsubject({payload},{call,put}){
              let data=yield call(getsubject)
              console.log('getsubject',data)
              yield put({
                  type:"subject",
                  payload:data.data
              })
          },
 
          *Allquestion({payload},{call,put}){
              let data=yield call(Allquestion,payload)
              console.log('Allquestion',data)
              yield put({
                  type:'insertData',
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
         },
         subject(state,{payload}){
             return {...state,subjects:payload}
         },
         insertData(state,{payload}){
             return {...state,insertList:payload}
         }
     },
 
 };
 