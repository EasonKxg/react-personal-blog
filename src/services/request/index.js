import axios from "axios"
import { baseURL } from "./config"
class requestInstance {
  constructor(baseURL, timeout = 0) {
    this.instance = axios.create({
      baseURL: `/api`,
      timeout
    })
    // 请求前拦截
    this.instance.interceptors.request.use(
      (config) => {
        console.log(config, 'config');
        // mainStore.isLoading = true;
        return config;
      },
      (err) => {
        return err;
      }
    );
    // 响应拦截
    this.instance.interceptors.response.use(
      (res) => {
        // mainStore.isLoading = false;
        return res;
      },
      (err) => {
        // mainStore.isLoading = false;
        return err;
      }
    );
  }

  service(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then((res => {
        resolve(res)
      })).catch((err => {
        reject(err)
      }))
    })
  }

  get(config) {
    return this.service({ ...config, method: "GET" })
  }

  post(config) {
    return this.service({ ...config, method: "POST" })
  }

  patch(config) {
    return this.request({ ...config, method: "PATCH" });
  }

  delete(config) {
    return this.request({ ...config, method: "DELETE" });
  }
}

const request = new requestInstance(baseURL)
export default request