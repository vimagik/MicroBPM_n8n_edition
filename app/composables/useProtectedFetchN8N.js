export default async (url, request_data = {}) => {

    const runtimeConfig = useRuntimeConfig()
    const baseUrl = runtimeConfig.public.n8n.url
    const jwt = runtimeConfig.public.n8n.jwt

    const mainOptions = reactive({
        headers: {
        Authorization: `Bearer ${jwt}`,
        }
    });

    Object.assign(mainOptions, request_data);

    return $fetch(`${baseUrl}${url}`, mainOptions); 
}