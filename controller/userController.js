const qs = require("qs");
const baseHttpClient = require("../common/baseHttpClient");
const userRequestUrlMappingResolver = require("../config/client/userRequestUrlMappingResolver");

/**
 {
    result:{
        code:0,
        description: 'success'
    },
    data:{

    }
 }
 */
// curl -X POST -H "Content-Type:application/json;charset=utf-8" -d '{"name":"hello","password":"123"}' http://localhost:3000/api/login
class UserController {
  async login(ctx) {
    const requestUrl = userRequestUrlMappingResolver.login;
    console.log(ctx.request.body);
    try {
      const response = await baseHttpClient.doHttpPostRequest(
        ctx,
        requestUrl,
        JSON.stringify(ctx.request.body)
      );
      const responseData = qs.parse(response.data);
      const responseDataCode = responseData.result.code;

      // login successful
      if (0 === responseDataCode) {
        ctx.body = responseData;
      } else {
        ctx.body = responseData;
      }
    } catch (e) {
      ctx.body = "转发测试连接不通";
    }
  }
}

module.exports = new UserController();
