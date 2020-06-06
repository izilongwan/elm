const types = {
  SET_LOCATION: 'SET_LOCATION',
  SET_ADDRESS: 'SET_ADDRESS',
  SET_SHOPPING_INFO: 'SET_SHOPPING_INFO',
  SET_SHOPPING_ADDRESS: 'SET_SHOPPING_ADDRESS',
  SET_SHOPPING_REMARK: 'SET_SHOPPING_REMARK'
}

export default {
  [types.SET_LOCATION] (state, location) {
    state.LOCATION = location ? location : {};
  },

  [types.SET_ADDRESS] (state, address) {
    state.ADDRESS = address ? address : '';
  },

  [types.SET_SHOPPING_INFO] (state, shoppingInfo) {
    state.SHOPPING_INFO = shoppingInfo ? shoppingInfo : null;
  },

  [types.SET_SHOPPING_ADDRESS] (state, shoppingAddress) {
    state.SHOPPING_ADDRESS = shoppingAddress ? shoppingAddress : null;
  },

  [types.SET_SHOPPING_REMARK] (state, remark) {
    state.SHOPPING_REMARK = remark ? remark : null;
  }
}