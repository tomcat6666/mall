const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '~': path.resolve(__dirname, 'src'),
                'style': path.resolve(__dirname, 'src/style')
            }
        }
    },
    // 这个就是进行跨域，也就是http-proxy-middleware
    devServer: {
        proxy: {
            '/api': {
                //直接配置的是允许跨域的模式
                target: 'http://kg.zhaodashen.cn',
                changeOrigin: true, // 是否允许跨域
                secure: false,      // 关闭SSL证书验证https协议接口需要改成true 
                pathRewrite: {     // 重写路径请求
                    '^/api': '' //路径重写 
                }
            },
            // ....
        }
    }
}
