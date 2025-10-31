export const useFormatData = () => {
    const { locale } = useI18n()
    function formatData(dateStr) {
        const date = new Date(dateStr)
        return new Intl.DateTimeFormat(locale.value, {
            dateStyle: 'short',
            timeStyle: 'short'
        }).format(date)
    }
    
    return { formatData }
}