import {useDispatch, useSelector} from "react-redux";
import {setFilterData} from "../redux/features/extentionReducer.js";

const Title = () => {

    const {filterData} = useSelector((state)=>state.extension);

    const dispatch = useDispatch()
    const handleFilterDataChange = (f)=>{
        dispatch(setFilterData(f))

    }

    return (
        <div className="title">
            <h2>Extention List</h2>
            <div>
                <button className={filterData==="all" ? "title-button-active" : "title-button"} onClick={()=>handleFilterDataChange("all")}>all</button>


                <button className={filterData==="active" ? "title-button-active" : "title-button"} onClick={()=>{
                    handleFilterDataChange("active")}}>active</button>


                <button className={filterData==="inactive" ? "title-button-active" : "title-button"} onClick={()=>{
                    handleFilterDataChange("inactive")}}>inactive</button>
            </div>
        </div>
    )
}
export default Title
