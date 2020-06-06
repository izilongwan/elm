const BASE_URL = 'https://ele-interface.herokuapp.com/api/';
const LOCAL = 'http://39.98.76.151:5007/api/';

const API = {
  SMS_LOGIN: LOCAL + 'sms/login',
  USER_LOGIN: LOCAL + 'user/login',
  USER_INFO_GET: LOCAL + 'user/get_info',
  ADDRESS_GET: LOCAL + 'address/get',
  ADDRESS_ADD: LOCAL + 'address/add',
  ADDRESS_EDIT: LOCAL + 'address/edit',
  ADDRESS_REMOVE: LOCAL + 'address/remove',
  ORDER_GET: LOCAL + 'order/get',
  ORDER_ADD: LOCAL + 'order/add',
  ORDER_REMOVE: LOCAL + 'order/remove',
  GET_SHOP: LOCAL + 'shop/get',
  GET_SHOP_LIST: LOCAL + 'restaurant/get',
  GET_DETAIL_COMMENTS: LOCAL + 'comment/get',

  GET_CITY_INFO: BASE_URL + 'posts/cities',
  GET_KEYWORDS_SEARCH: BASE_URL + 'profile/typeahead/',
  GET_DETAIL_SHOP: BASE_URL + 'profile/batch_shop',
  GET_DETAIL_SELLER: BASE_URL + 'profile/seller'
}

export { API };

