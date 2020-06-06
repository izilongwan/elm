import { HTTP } from 'utils/http';
import { API } from 'utils/config';

class OrderModel extends HTTP {
  getOrder (data) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: API.ORDER_GET,
        data,
        success (data) {
          resolve(data.data);
        },
        error (error) {
          reject({error, code: -1})
        }
      })
    })
  }

  addOrder (data) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: API.ORDER_ADD,
        data,
        success (data) {
          resolve(data.data);
        },
        error (error) {
          reject({error, code: -1})
        }
      })
    })
  }

  removeOrder (data) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: API.ORDER_REMOVE,
        data,
        success (data) {
          resolve(data.data);
        },
        error (error) {
          reject({error, code: -1})
        }
      })
    })
  }
}

export { OrderModel };