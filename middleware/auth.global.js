export default defineNuxtRouteMiddleware((to, from) => {
  
    const store = useAppStore()

    console.log(store.accessToken)
    
    if (to.path !== '/login' && !store.accessToken) {
        return navigateTo('/login')
    }

})