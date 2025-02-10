import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
    const leftDrawerOpen = ref(true)
    
    function openCloseBar() {
        leftDrawerOpen.value = !leftDrawerOpen.value
    }

    const accessToken = ref(null)
    const refreshToken = ref(null)
    const expires = ref(null)

    const runtimeConfig = useRuntimeConfig()
    const url = runtimeConfig.public.directus.url

    async function login(email, password) {
        
        await $fetch(`${url}/auth/login`, {
            method: 'POST',
            body: {
                "email": email,
                "password": password
            }
        }).then((response) => {
            accessToken.value = response.data.access_token
            refreshToken.value = response.data.refresh_token
            let expiresDate = new Date()
            expires.value = expiresDate.setTime(expiresDate.getTime() + response.data.expires)
        })
        
    }

    async function refresh() {

        await $fetch(`${url}/auth/refresh`, {
            method: 'POST',
            body: {
                "refresh_token": refreshToken.value,
                "mode": 'json'
            }
        }).then((response) => {
            accessToken.value = response.data.access_token 
            let expiresDate = Date.now()
            expires.value = expiresDate.setTime(expiresDate.getTime() + response.data.expires)
        })
        
    }

    function logout() {
        accessToken.value = ''
        refreshToken.value = ''
        expires.value = 0
    }

    return { leftDrawerOpen, openCloseBar, login, logout,  accessToken, refreshToken, expires, refresh}
})