module.exports = {
    devServer: {
        // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
        proxy: {
            '/api': {
            target: 'http://localhost:80',
            ws: false,
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
            }
        },
        disableHostCheck: true,
        // development server port 8000
        port: 8001
    },
}