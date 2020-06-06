import { API } from 'utils/config';
import { HTTP } from 'utils/http';

class IndexModel extends HTTP {
  getShopList ({ page, num }) {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: `${ API.GET_SHOP_LIST }/${ page }/${ num }`,
        success (res) {
          resolve(res.data);
        },
        error (error) {
          reject({ error, code: -1 });
        }
      })
    })
  }

  getUserInfo (data) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: API.USER_INFO_GET,
        data,
        success (data) {
          resolve(data.data);
        },
        error (error) {
          resolve({ error, code: -1 });
        }
      })
    })
  }
}

export { IndexModel };

