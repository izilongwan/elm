import { HTTP } from 'utils/http';
import { API } from 'utils/config';

class CityModel extends HTTP {
  getCityInfo () {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: API.GET_CITY_INFO,
        success (data) {
          resolve(data.data);
        },
        error (error) {
          reject({ error, code: -1 })
        }
      })
    })
  }
}

export { CityModel };