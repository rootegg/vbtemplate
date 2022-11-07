const axios = require("axios");
const projectConfig = require("../util/projectConfigResolver");

const hostBaseUrl = projectConfig.hostBaseUrl;

exports.doHttpGetRequest = function (ctx, requestUrl, params) {
  return doHttpRequest(ctx, requestUrl, params, "GET");
};

exports.doHttpPostRequest = function (ctx, requestUrl, params) {
  return doHttpRequest(ctx, requestUrl, params, "POST");
};

exports.doHttpPutRequest = function (ctx, requestUrl, params) {
  return doHttpRequest(ctx, requestUrl, params, "PUT");
};

exports.doHttpDeleteRequest = function (ctx, requestUrl, params) {
  return doHttpRequest(ctx, requestUrl, params, "DELETE");
};

function doHttpRequest(ctx, requestUrl, params, method) {
  if ("GET" == method.toUpperCase()) {
    return axios({
      baseURL: hostBaseUrl,
      url: requestUrl,
      method: "GET",
      params: params,
    });
  } else if (["PUT", "POST", "DELETE"].includes(method.toUpperCase())) {
    return axios({
      baseURL: hostBaseUrl,
      url: requestUrl,
      method: "GET",
      data: params,
    });
  }
}
