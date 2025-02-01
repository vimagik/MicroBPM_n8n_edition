export const useGetItems = (colName, params, useAsyncDataOptions) => {
const { getItems } = useDirectusItems();
return useAsyncData(colName, () =>
        getItems({
            collection: colName,
            params
        }),
        useAsyncDataOptions
    )
}   
