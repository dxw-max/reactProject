const {createProxyMiddleware} = require('http-proxy-middleware')
module.exports = function(app){
    app.use('/jc',createProxyMiddleware({
        target:'https://api.juooo.com',
        changeOrigin:true,
        pathRewrite:{
            '^/jc':''
        }
    })),
    app.use('/api',createProxyMiddleware({
        target:'http://127.0.0.1:8090',
        changeOrigin:true,
        pathRewrite:{
            '^/api':''
        }
    }))
}