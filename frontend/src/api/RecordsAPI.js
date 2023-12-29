import api from '../lib/axios.js';

export default {
    getRecords() {
        return api.get('/auth/get-records')
    }
}

