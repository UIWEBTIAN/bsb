// 封装 hxios.get

let baseUrl = "http://25.frp.easyder.com"

let hxios = {
    get(url, header) {
        // 发送请求
        // promise
        return new Promise((resolve, reject) => {
            // 执行异步操作即可
            // ajax请求 微信自带的
            wx.request({
                url: baseUrl + url, //开发者服务器接口地址",
                // data: 'data', //请求的参数",
                header,
                method: 'GET',
                dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
                success: res => {
                    resolve(res);
                },
                fail: () => {
                    reject()
                },
                complete: () => {}
            });
        })
    },
    post(url, data, header) {
        // 发送请求
        // promise
        return new Promise((resolve, reject) => {
            // 执行异步操作即可
            // ajax请求 微信自带的
            wx.request({
                url: baseUrl + url, //开发者服务器接口地址",
                data, //请求的参数",
                method: 'POST',
                // 如果传递了header直接使用
                header,
                dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
                success: res => {
                    resolve(res);
                },
                fail: () => {
                    reject()
                },
                complete: () => {}
            });
        })
    }
}

export default hxios;