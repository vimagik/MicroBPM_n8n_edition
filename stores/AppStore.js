import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
    const leftDrawerOpen = ref(true)

    function openCloseBar() {
        leftDrawerOpen.value = !leftDrawerOpen.value
    }

    return { leftDrawerOpen, openCloseBar }
})