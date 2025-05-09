import axios from "axios";
const axiosInstance = axios.create({
    withCredentials: true, //for cookies save in browser
})
export const apiConnector = (method,url,body,headers,params) =>{
    return axiosInstance({
        method: method,
        url: url,
        data: body?body:null,
        headers: headers?headers:null,
        params: params?params:null
    })
}