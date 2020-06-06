import axios from 'axios';
import { Indicator } from 'mint-ui';
import qs from 'qs';

class HTTP {
  constructor () {
    this.axiosInterceptor();
    this.axiosRespense();
  }

  // 请求拦截
  axiosInterceptor () {
    // Add a request interceptor
    axios.interceptors.request.use(function (config) {
      // Do something before request is sent
      Indicator.open({ spinnerType: 'fading-circle' });
      return config;
    }, function (error) {
      Indicator.close();
      // Do something with request error
      return Promise.reject(error);
    });
  }

  // 请求响应
  axiosRespense () {
    axios.interceptors.response.use(function (response) {
      // Do something with response data
      Indicator.close();
      return response;
    }, function (error) {
      Indicator.close();
      // Do something with response error
      return Promise.reject(error);
    });
  }

  // POST请求
  axiosPost (options) {
    axios({
      url: options.url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(options.data)
    })
      .then(res => options.success(res))
      .catch(error => options.error(error))
  }

  // GET请求
  axiosGet (options) {
    axios({
      url: options.url,
      method: 'GET',
    })
      .then(res => options.success(res))
      .catch(error => options.error(error))
  }
}

export { HTTP };

