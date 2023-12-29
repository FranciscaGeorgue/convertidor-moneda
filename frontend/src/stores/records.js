import { ref, onMounted, computed, onBeforeUnmount } from "vue";
import { defineStore } from "pinia";
import RecordsAPI from "../api/RecordsAPI.js";

export const useRecordsStore = defineStore('records', () => {

    const records = ref([{}])

    onMounted(async () => {
        try {
            const { data } = await RecordsAPI.getRecords()
            records.value = data
        } catch (error) {
            console.log(error);
        }
    })

    return {
        records
    }
})