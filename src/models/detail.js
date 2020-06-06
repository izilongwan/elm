import { HTTP } from 'utils/http';
import { API } from 'utils/config';

class DetailModel extends HTTP {
  getDetailShop () {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: API.GET_DETAIL_SHOP,
        success (res) {
          resolve(res.data);
        },
        error (error) {
          reject({error, code: -1})
        }
      })
    })
  }

  getDetailComments () {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: API.GET_DETAIL_COMMENTS,
        success (res) {
          resolve(res.data);
        },
        error (error) {
          reject({error, code: -1})
        }
      })
    })
  }

  getDetailSeller () {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: API.GET_DETAIL_SELLER,
        success (res) {
          resolve(res.data);
        },
        error (error) {
          reject({error, code: -1})
        }
      })
    })
  }
}

export { DetailModel };
