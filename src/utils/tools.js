const _AMap = {
  // 获取精准定位
  getLocation (opts = {}) {
    AMap.plugin('AMap.Geolocation', () => {
      const geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000
      });

      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, 'complete', onComplete);
      AMap.event.addListener(geolocation, 'error', onError);

      function onComplete (data) {
        // data是具体的定位信息
        // console.log(data.formattedAddress);
        // 成功回调
        opts.success(data);
      }

      function onError (data) {
        // 定位出错
        // console.log('error', data);
        // 失败回调
        opts.error(data);
      }
    });
  },

  // 获取IP定位
  getLngLatLocation (callback) {
    AMap.plugin('AMap.CitySearch', () => {
      const citySearch = new AMap.CitySearch();

      citySearch.getLocalCity((status, result) => {
        if (status === 'complete' && result.info === 'OK') {
          // 查询成功，result即为当前所在城市信息
          // _self.geoCoder(result);
          this.geoCoder(result, callback);
        }
      });
    });
  },

  // 地理位置转换
  geoCoder (data, callback) {
    AMap.plugin('AMap.Geocoder', () => {
      const city = data.city && data.city.length > 0 && data.city || data.adcode;

      const geocoder = new AMap.Geocoder({
        // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
        city
      });

      let lnglat = null;

      if (data.lnglat) {
        lnglat = data.lnglat;
      } else if (data.rectangle) {
        lnglat = data.rectangle.split(';')[0];
      }

      if (lnglat) {
        geocoder.getAddress(lnglat, (status, result) => {
          if (status === 'complete' && result.info === 'OK') {
            // result为对应的地理位置详细信息
            // console.log(result);
            const res = result.regeocode;

            callback && callback(res);
          }
        });

      } else {
        const address = data.address.length > 0
          ? data.address
          : data.district;

        geocoder.getLocation(address, function (status, result) {
          if (status === 'complete' && result.info === 'OK') {
            // result中对应详细地理坐标信息
            const res = result.regeocode || result.geocodes[0];

            callback && callback(res);
          }
        })
      }

    });
  },

  // 搜索结果
  searchResult (opts, callback) {
    AMap.plugin('AMap.Autocomplete', function () {
      // 实例化Autocomplete
      const autoOptions = {
        //city 限定城市，默认全国
        city: opts.city
      }
      const autoComplete = new AMap.Autocomplete(autoOptions);

      autoComplete.search(opts.keywords, function (status, result) {
        // 搜索成功时，result即是对应的匹配数据

        callback && callback(result);
      })
    })
  }
}

const tools = {
  checkPhoneNumber (num) {
    const reg = /1[3-9]\d{9}/;

    return reg.test(num);
  },

  trimSpace (str) {
    return str.replace(/\s/g, '');
  },

  _throttle (fn, delay = 500) {
    var fTime = Date.now(),
      res = null,
      t = null;

    return function () {
      var curTime = Date.now(),
        args = arguments;

      t && clearTimeout(t);
      t = null;

      if (curTime - fTime >= delay) {
        res = fn.apply(this, args);
        fTime = curTime;
      } else {
        t = setTimeout(function () {
          res = fn.apply(this, args);
        }.bind(this), delay)
      }
      return res;
    }
  },

  // 深度克隆
  deepClone (Org, Tar = {}) {
    const arrStr = '[object Array]',
      toString = {}.toString;

    for (const prop in Org) {
      if (Org.hasOwnProperty(prop)) {
        const res = Org[prop];

        if (res && typeof res === 'object') {
          Tar[prop] = toString.call(res) === arrStr ? [] : {};
          this.deepClone(res, Tar[prop]);
        } else {
          Tar[prop] = res;
        }
      }
    }

    return Tar;
  },

  formatTimeAddZore (time) {
    return ('0' + time).substr(-2);
  },

  formatTime (time) {
    const date = new Date(time),
      y = date.getFullYear(),
      m = tools.formatTimeAddZore(date.getMonth() + 1),
      d = tools.formatTimeAddZore(date.getDate()),
      h = tools.formatTimeAddZore(date.getHours()),
      f = tools.formatTimeAddZore(date.getMinutes()),
      s = tools.formatTimeAddZore(date.getSeconds());

    return `${y}/${m}/${d} ${h}:${f}:${s}`;
  },

  encriptPhone (phone) {
    const reg = /(\d{3})(\d{4})(\d{3})/;

    return phone.toString().replace(reg, '$1****$3');
  },

  AMap: _AMap
}

export default tools;