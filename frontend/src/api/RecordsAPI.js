import api from '../lib/axios.js';

export default {
    getRecords() {
        return api.get('/auth/get-records')
    },
    saveRecord(data) {
        return api.post('/auth/save-record', data)
    }
}

