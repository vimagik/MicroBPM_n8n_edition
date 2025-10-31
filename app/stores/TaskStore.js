import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', () => {
    const contextId = ref(null)
    const taskId = ref(null)

    function setContext(id) { 
        contextId.value = id
    }

    function setTaskId(id) { 
        taskId.value = id
    }

    function resetTask() {
        contextId.value = null
        taskId.value = null
    }

    return { contextId, taskId, setContext, setTaskId, resetTask}
})