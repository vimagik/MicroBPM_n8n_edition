export default async (url, request_data = {}) => {

    const runtimeConfig = useRuntimeConfig()
    const baseUrl = runtimeConfig.public.directus.url
    const store = useAppStore()
    const {accessToken, expires } = storeToRefs(store)

    const now = new Date();

    if (now.getTime() > expires.value) {
        try {
            await store.refresh()
        } catch (error) {
            await navigateTo('/login');
        }
    }

    const mainOptions = reactive({
        headers: {
        Authorization: `Bearer ${accessToken.value}`,
        }
    });

    Object.assign(mainOptions, request_data);

    return useFetch(`${baseUrl}${url}`, mainOptions); 
}