import request from "../utils/request";
export function login (params){
    return request.post("/user/login",params)
}
export function exam (){
    return request.get("/exam/questions/new")
}