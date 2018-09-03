const request = require('superagent')
const scheme = "http"
const baseAddress = "localhost"
const port = "8888"


export const getBaseUrl = () =>{
    return `${scheme}://${baseAddress}:${port}`
}

 
export const getUrlFor = (target) => {
    return `${scheme}://${baseAddress}:${port}/${target}`
}

export const http = request;




// function mainfunc(t1, t2, t3){
// 	console.log(t1, t2)
//   	return (t1 + t2) * t3
// }