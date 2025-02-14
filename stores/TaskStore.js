import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', () => {
    const contextId = ref(null)   

    function setContext(id) { 
        contextId.value = id
    }

    return { contextId, setContext}
})