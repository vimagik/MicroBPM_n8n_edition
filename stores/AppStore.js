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
        const { data, status } = await useFetch(`${url}/auth/login`, {
            method: 'POST',
            body: {
                "email": email,
                "password": password
            }
        })
        if (status === 'success') {
            accessToken.value = data.value.access_token
            refreshToken.value = data.value.refresh_token 
            expires.value = data.value.expires
        }
    }

    return { leftDrawerOpen, openCloseBar, login }
})