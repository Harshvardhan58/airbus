const base_url = "http://localhost:3000/";
function buildUrl(url, parameters) {
  let qs = "";
  for (const key in parameters) {
    if (parameters.hasOwnProperty(key)) {
      const value = parameters[key];
      qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
    }
  }
  if (qs.length > 0) {
    qs = qs.substring(0, qs.length - 1); //chop off last "&"
    url = url + "?" + qs;
  }

  return url;
}
export default class API {
  static get = (path, params = {}) => {
    let url = buildUrl(`${base_url + path}`, params);
    return fetch(url).then(res => {
      return res.json();
    });
  };
}
