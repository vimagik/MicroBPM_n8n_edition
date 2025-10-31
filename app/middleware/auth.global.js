export default defineNuxtRouteMiddleware((to, from) => {
  
    const store = useAppStore()
   
    if (to.path !== '/login' && !store.accessToken) {
        return navigateTo('/login')
    }

})