const httpProxy = require("http-proxy")

const proxy = httpProxy
  .createProxyServer({
    target: "https://www.airfrov.com",
    xfwd: false,
    changeOrigin: true,
    hostRewrite: true,
  })
  .listen(process.env.PORT)

