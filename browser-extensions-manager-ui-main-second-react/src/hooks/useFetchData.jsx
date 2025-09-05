import {useDispatch, useSelector} from "react-redux";
import {useEffect, useMemo} from "react";
import {getExtensions} from "../redux/features/extentionReducer.js";

const useFetchData = (Data) => {


    const dispatch = useDispatch();


    const {extentionList, isLoading, isError , isUpdating} = useSelector(
        (state) => state.extension
    );



    useEffect(() => {
        dispatch(getExtensions());        
    }, [dispatch]);


    const derived = useMemo(() => {
        const list = extentionList || [];
        if (Data === 'active')   return list.filter(d => d.isActive);
        if (Data === 'inactive') return list.filter(d => !d.isActive);
        return list;
    }, [extentionList, Data]);


    return { data: derived, isLoading, isError ,isUpdating};

}

export default useFetchData;