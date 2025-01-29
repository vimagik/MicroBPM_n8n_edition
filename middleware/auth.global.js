export default defineNuxtRouteMiddleware((to, from) => {
  
    const user = useDirectusUser();
    
    if (to.path !== '/login' && !user.value) {
        return navigateTo('/login')
    }

})