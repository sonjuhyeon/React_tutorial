import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_TASKS_API_URL, POST_TASKS_API_URL } from "../../utils/apiUrl";
import { getRequest, postRequest } from "../../utils/requestMethods";

const getItemsFetchThunk = (actionType, apiUrl) => {
  return createAsyncThunk(actionType, async (userId) => {
    const fullPath = `${apiUrl}/${userId}`;
    return await getRequest(fullPath);
  });
};

const postItemFetchThunk = (actionType, apiUrl) => {
  return createAsyncThunk(actionType, async (postData) => {
    const options = {
      body: JSON.stringify(postData), // 표준 JSON 문자열로 변환
    };
    return await postRequest(apiUrl, options);
  });
};

export const fetchGetItemsData = getItemsFetchThunk(
  "fetchGetItems",
  GET_TASKS_API_URL
);

export const fetchPostItemData = postItemFetchThunk(
  "fetchPostItem",
  POST_TASKS_API_URL
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
    postItemData: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetItemsData.fulfilled, handleFullfilled("getItemsData"))
      .addCase(fetchGetItemsData.rejected, handleRejected)

      .addCase(fetchPostItemData.fulfilled, handleFullfilled("postItemData"))
      .addCase(fetchPostItemData.rejected, handleRejected);
  },
});

export default apiSlice.reducer;
