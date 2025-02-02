export const useGetItems = (colName, params, useAsyncDataOptions) => {
const { getItems } = useDirectusItems();
console.log(params)    
return useAsyncData(colName, () =>
        getItems({
            collection: colName,
            params
        }),
        useAsyncDataOptions
    )
}   
