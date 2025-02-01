export const useGetItems = (colName, params, options) => {
const { getItems } = useDirectusItems();
return useAsyncData(colName, () =>
        getItems({
            collection: colName,
            params
        }),
        options
    )
}   
