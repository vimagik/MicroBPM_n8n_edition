import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
    const leftDrawerOpen = ref(true)
    
    function openCloseBar() {
        leftDrawerOpen.value = !leftDrawerOpen.value
    }

    const accessToken = ref(null)
    const refreshToken = ref(null)
    const expires = ref(0)

    const runtimeConfig = useRuntimeConfig()
    async function login(email, password) {
        
        const url = runtimeConfig.public.directus.url
        await $fetch(`${url}/auth/login`, {
            method: 'POST',
            body: {
                "email": email,
                "password": password
            }
        }).then((response) => {
            accessToken.value = response.data.access_token
            refreshToken.value = response.data.refresh_token 
            expires.value = response.data.expires
        })
        
    }

    function logout() {
        accessToken.value = ''
        refreshToken.value = ''
        expires.value = 0
    }

    return { leftDrawerOpen, openCloseBar, login, logout,  accessToken, refreshToken, expires}
})