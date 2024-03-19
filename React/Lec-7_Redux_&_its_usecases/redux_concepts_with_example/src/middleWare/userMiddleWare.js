// import methods from slice {fetchDataStart, fetchDataSuccess, fetchDataFailure}

export const fetchUserMiddleware = async(dispatch, uid) =>{

    const {data, error, isLoading} = useFetchData();
    dispatch(fetchDataStart());

    try{
        
        dispatch(fetchDataSuccess(data));
    }catch(error){
        dispatch(fetchDataFailure(error));
    }

}