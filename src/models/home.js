import { API } from 'utils/config';
import { IndexModel } from './index';

class HomeModel extends IndexModel {
  getShop () {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: API.GET_SHOP,
        success (data) {
          resolve(data.data);
        },
        error (error) {
          reject({error, code: -1});
        }
      })
    })
  }
}

export { HomeModel };
