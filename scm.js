class SCM {

  static getCookie(key = false) {
    let cookie = document.cookie;
    let cookieSplited = cookie.split('; ');
    let scm = cookieSplited.reduce((acc, val) => {
      let cache = val.split('=');
      let obj = {};
      obj[cache[0]] = cache[1];
      return {...acc, ...obj};
    }, {})

    if (cookie === "") {
      return {};
    }

    if (key) {
      return scm[key];
    }
    return scm;
  }

  static setCookie(name, value, options = {}) {

    options = {
      path: '/',
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }

  static deleteCookie(name) {
    this.setCookie(name, "", {
      'max-age': -1
    })
  }

}
