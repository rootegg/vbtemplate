const Koa = require("koa");
const path = require("path");
const combineRouters = require("koa-combine-routers");
const bodyParser = require("koa-bodyparser");
const koaStatic = require("koa-static");
const compress = require("koa-compress");
const app = new Koa();

const router = require("./router");

app.use(
  compress({
    threshold: 2048, // 传输数据量超过2k会压缩响应
  })
);

app.use(bodyParser()); // 请求体

app.use(koaStatic(path.join(__dirname, "dist"))); // 静态资源

const unifiedRouters = combineRouters.apply(null, router)(); // 路由合并
app.use(unifiedRouters);

module.exports = app;
