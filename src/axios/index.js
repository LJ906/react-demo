// import axios from 'axios';
import Jsonp from 'jsonp';

export default class Axios {
    static jsonp (options) {
      return new Promise ((resolve, reject) => {
            // 利用jsonp 发请求
            Jsonp(options.url, {
                param: '', 
                timeout: 5000,
                prefix: '', 
                name: ''
            }, (err, response)=> {
                console.log('err', err);
                console.log('response', response);
                 if (response.status === "success") {
                     resolve(response)
                 } else {
                    reject(response.message)
                 }        
            })
        })
    }
}