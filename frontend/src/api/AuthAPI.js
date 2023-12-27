import api from '../lib/axios.js';

export default {
    register(data) {
        return api.post('/auth/register', data)
    },
    login(data) {
        return api.post('/auth/login', data)
    },
    converter(data) {
        console.log("data desde auth api")
        console.log(data)

        const year = data.date.split('-')[0]
        const month = data.date.split('-')[1]
        const day = data.date.split('-')[2]
        return api.get('https://api.cmfchile.cl/api-sbifv3/recursos_api/uf/'+year+'/'+month+'/dias/'+day+'?apikey=66a23f9065cab137fe5e6f01353245bab0026aff&formato=JSON')
    }
}