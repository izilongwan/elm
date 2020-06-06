export default {
  GEO_CITY (state) {
    if (state.LOCATION.addressComponent) {
      return state.LOCATION.addressComponent.city ||
        state.LOCATION.addressComponent.province;
    }

    return '';
  },

  GEO_ADDRESS (state) {
    return state.ADDRESS ? state.ADDRESS : '';
  }
}