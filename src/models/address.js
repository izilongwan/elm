import { HTTP } from 'utils/http';
import { API } from 'utils/config';

class AddressModel extends HTTP {
  getAddress (data) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: API.ADDRESS_GET,
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

  addAddress (data) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: API.ADDRESS_ADD,
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

  editAddress (data) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: API.ADDRESS_EDIT,
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

  removeAddress (data) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: API.ADDRESS_REMOVE,
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

export { AddressModel };