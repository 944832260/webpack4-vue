import axios from "axios";

let token = ''
axios.interceptors.request.use(
  config => {
    let user = window.localStorage.getItem('APUS_TOKEN')
    if (user) {
      token = user;
      // 携带token传输
      config.headers['Authorization'] = "Bearer " + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error.response);
  }
);


// http response 拦截器
axios.interceptors.response.use(
  response => {
    // 可以在这里判断是否登录 没登录返回登录页
    switch(true){
      case response.status === 200 && response.data && response.data.code === 401:
        if(location.pathname === "/"){
          return response.data;
        }
        localStorage.clear()
        location.href = '/';
        break;
      case response.status === 200:
        return response.data;
      default:
        return response;
    }
  },
  error => {
    if (error.response.status == 401) {
      // console.log(error.response.data)
      if (error.response.data.code == 401) {
        // location.href = '/';
      } 
    }
    return Promise.reject(error.response)
  }
);
