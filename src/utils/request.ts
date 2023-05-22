import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 1000 * 5
})

type NotifyType = {
  title?: string
  type: string
  message?: string
}
const Notify = (opt: NotifyType) => {
  console.log(opt)
}


http.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const token = window.localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = token.indexOf('Bearer') >= 0
      ? token
      : 'Bearer ' + token;
  }

  return config;
}, function (error) {
  // 对请求错误做些什么

  return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么

  const {status} = error.response

  if (error.response) {

    const {data} = error.response

    switch (status) {
      case 401:
        Notify({
          title: '401',
          type: 'error',
          message: data?.msg || error.message,
        });
        break;
      case 403:
        Notify({
          title: '403',
          type: 'error',
          message: data?.msg || error.message,
        });
        break;
      case 500:
        Notify({
          title: '500',
          type: 'error',
          message: data?.msg || error.message,
        });
        break;
      default:
        Notify({
          title: String(status),
          type: 'error',
          message: data?.msg || error.message,
        });
        break;
    }
  } else if (error.message) {
    if (error.message === 'Network Error') {
      Notify({
        title: '错误',
        type: 'error',
        message: '网络连接错误，请检查网络环境！',
      });
    } else if (error.message?.indexOf('timeout') >= 0) {
      Notify({
        title: '错误',
        type: 'error',
        message: '网络连接超时，请重试！',
      });
    } else {
      Notify({
        title: '错误',
        type: 'error',
        message: error.message,
      });
    }
  } else {
    Notify({
      title: '错误',
      type: 'error',
      message: '未知错误！',
    });
  }

  return Promise.reject(error);
});

export function fetch({url = '', params = {}, headers = {}}) {
  return new Promise((resolve, reject) => {
    http.get(url, {
      params,
      headers
    }).then(res => {
      resolve(res.data)
    }).catch((err) => {
      reject(err.response)
    })
  })

}

export function post({url = '', data = {}, headers = {}}) {
  return new Promise((resolve, reject) => {
    http.post(url, data, {
      headers
    }).then(res => {
      resolve(res.data)
    }).catch((err) => {
      reject(err.response)
    })
  })

}
