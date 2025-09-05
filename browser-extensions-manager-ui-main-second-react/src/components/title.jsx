import {useDispatch} from "react-redux";
import {setFilterData} from "../redux/features/extentionReducer.js";

const Title = () => {


    const dispatch = useDispatch()
    const handleFilterDataChange = (f)=>{
        dispatch(setFilterData(f))

    }

    return (
        <div className="title">
            <h2>Extention List</h2>
            <div>
                <button className="title-button" onClick={()=>handleFilterDataChange("all")}>all</button>


                <button className="title-button" onClick={()=>{
                    handleFilterDataChange("active")}}>active</button>


                <button className="title-button" onClick={()=>{
                    handleFilterDataChange("inactive")}}>inactive</button>
            </div>
        </div>
    )
}
export default Title
