import { API } from 'utils/config';
import { HTTP } from 'utils/http';

class LoginModel extends HTTP {
  smsSend (data) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: API.SMS_SEND,
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

  userLogin (data) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: API.USER_LOGIN,
        data,
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

export { LoginModel };

