import axios from 'axios'


const service = axios.create({
  baseURL: 'http://169.254.12.198:7001/',
  timeout: 5000 // request timeout
})
service.interceptors.request.use(
  config => {
    // console.log(config.data.user_name)
    // console.log(config.data.use_name)
    // if(config.data.user_name=='chenmanjie'&&config.data.user_pwd=='Chenmanjie123!'){
    //   window.localStorage.setItem('user_name',JSON.stringify('chenmanjie'))
    //   window.localStorage.setItem('user_pwd',JSON.stringify('Chenmanjie123!'))
    // }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error)
  }
)
export default service
