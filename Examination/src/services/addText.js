import request from '../utils/request'

//获取所有的试题类型
export function getType(){
    return request.get('/exam/getQuestionsType')
}

//添加试题
// export function insertQuestion(params){
//     return request.post("/exam/questions",params)
// }

//获取所有的试题
export function getClassPage(){
    return request.get("/exam/questions/new")
     
}
