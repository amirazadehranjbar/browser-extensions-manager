import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


// region get all extensions
export const getExtensions = createAsyncThunk(
    "getExtensions",
    async (_, thunkAPI) => {


        try {
            const res = await axios.get("http://localhost:8000/api/ext-list");
            return res.data.extensions;
        } catch (e) {
            return thunkAPI.rejectWithValue({
                message: e?.response?.data?.error || e?.message || "cant get data"
            });
        }
    }
);
// endregion

//region update active
export const updateActive = createAsyncThunk(
    "updateActive",
    async ({id,active}, thunkAPI) => {

        try {
            const res = await axios.post("http://localhost:8000/api/ext-list", {id, active});
            return res.data.extensions;
        } catch (e) {
            return thunkAPI.rejectWithValue({
                message: e?.response?.data?.error || e?.message || "cant update active value"
            });
        }


    }
)
// endregion


const extensionSlice = createSlice(
    {
        name: "extension",
        initialState: {
            extentionList: [],
            isError: false,
            isLoading: false,
            isUpdating: false,
            filterData:"all",
        },

        extraReducers: (builder) => {

            builder
                //get data
                .addCase(getExtensions.pending, (extension) => {
                    extension.isLoading = true;
                    extension.isError = false;
                    extension.isUpdating = false;
                })

                .addCase(getExtensions.fulfilled, (extension, action) => {
                    extension.isLoading = false;
                    extension.isError = false;
                    extension.isUpdating = false;
                    extension.extentionList = action.payload;
                })

                .addCase(getExtensions.rejected, (extension) => {
                    extension.isLoading = false;
                    extension.isUpdating = false;
                    extension.isError = true;
                })
                // update active
                .addCase(updateActive.pending, (extension) => {
                    extension.isLoading=false;
                    extension.isError=false;
                    extension.isUpdating=true;
                })
                .addCase(updateActive.fulfilled, (extension,action) => {
                    extension.isLoading=false;
                    extension.isError=false;
                    extension.isUpdating=false;
                    extension.extentionList = action.payload;
                })
                .addCase(updateActive.rejected,(extension)=>{
                    extension.isLoading=false;
                    extension.isError=true;
                    extension.isUpdating=false;
                })


        },

        reducers:{
            setFilterData:(extension , action)=>{
                extension.filterData = action.payload;
            }
        }

    }
);

export const {setFilterData} =extensionSlice.actions;

export default extensionSlice.reducer;