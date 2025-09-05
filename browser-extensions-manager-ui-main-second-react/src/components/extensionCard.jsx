import Switch from "@mui/material/Switch";
import useFetchData from "../hooks/useFetchData.jsx";
import {updateActive} from "../redux/features/extentionReducer.js";
import {useDispatch, useSelector} from "react-redux";

const label = {inputProps: {"aria-label": "Switch demo"}};

const ExtensionCard = () => {


    const {filterData} = useSelector((state)=>state.extension);



    const {data, isLoading, isError, isUpdating} = useFetchData(filterData);

    const dispatch = useDispatch();

    const handleUpdateActive = async (id,isActive)=>{
        if(isUpdating) return;
        await dispatch(updateActive({id, active: !isActive}));
    }

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p style={{color: "tomato"}}>{"Error"}</p>;

    if (data.length === 0) return <h3>Data is Empty...</h3>

    return (
        <>
            {data.map(d => {
                return (
                    <div key={d._id} className="card-container">
                        <div className="card-top">
                            <img src={d.logo} alt=""/>
                            <div className="card-top-content">
                                <h3>{d.name}</h3>
                                <p>{d.description}</p>
                            </div>
                        </div>
                        <div className="card-bottom">
                            <button

                            >remove</button>
                            <Switch {...label} checked={d.isActive} onChange={() => handleUpdateActive(d._id, d.isActive)}/>
                        </div>
                    </div>
                );
            })}

        </>

    );
};

export default ExtensionCard;
