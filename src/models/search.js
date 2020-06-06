import { IndexModel } from './index';
import { API } from 'utils/config';

class SearchModel extends IndexModel {
  getKeywordsSearch (keywords) {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: API.GET_KEYWORDS_SEARCH + keywords,
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

export { SearchModel };