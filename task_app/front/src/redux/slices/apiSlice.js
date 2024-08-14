import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_TASKS_API_URL } from "../../utils/apiUrl";
import { getRequest } from "../../utils/requestMethods";

const getItemsFetchThunk = (actionType, apiUrl) => {
  return createAsyncThunk(actionType, async (userId) => {
    // console.log(apiUrl, userId);
    const fullPath = `${apiUrl}/${userId}`;
    return await getRequest(fullPath);
  });
};

export const fetchGetItemsData = getItemsFetchThunk(
  "fetchGetItems",
  GET_TASKS_API_URL
);

const handleFullfilled = (stateKey) => (state, action) => {
  state[stateKey] = action.payload;
};

const handleRejected = (state, action) => {
  console.log(action.payload);
  state.isError = true;
};

const apiSlice = createSlice({
  name: "api",
  initialState: {
    getItemsData: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetItemsData.fulfilled, handleFullfilled("getItemsData"))
      .addCase(fetchGetItemsData.rejected, handleRejected);
  },
});

export default apiSlice.reducer;
