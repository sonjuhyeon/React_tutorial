import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  DELETE_TASKS_API_URL,
  GET_TASKS_API_URL,
  POST_TASKS_API_URL,
  UPDATE_COMPLETED_TASKS_API_URL,
  UPDATE_IMPORTANT_TASKS_API_URL,
  UPDATE_TASK_API_URL,
} from "../../utils/apiUrl";
import {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
  putRequest,
} from "../../utils/requestMethods";

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

const updateItemFetchThunk = (actionType, apiUrl) => {
  return createAsyncThunk(actionType, async (updateData) => {
    const options = {
      body: JSON.stringify(updateData), // 표준 JSON 문자열로 변환
    };
    return await putRequest(apiUrl, options);
  });
};

const deleteItemFetchThunk = (actionType, apiUrl) => {
  return createAsyncThunk(actionType, async (id) => {
    const options = {
      method: "DELETE",
    };
    const fullPath = `${apiUrl}/${id}`;
    return await deleteRequest(fullPath, options);
  });
};

const updateCompletedFetchThunk = (actionType, apiUrl) => {
  return createAsyncThunk(actionType, async (options) => {
    return await patchRequest(apiUrl, options);
  });
};

const updateImportantFetchThunk = (actionType, apiUrl) => {
  return createAsyncThunk(actionType, async (options) => {
    return await patchRequest(apiUrl, options);
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

export const fetchPutItemData = updateItemFetchThunk(
  "fetchPutItem",
  UPDATE_TASK_API_URL
);

export const fetchDeleteItemData = deleteItemFetchThunk(
  "fetchDeleteItem",
  DELETE_TASKS_API_URL
);

export const fetchUpdateCompletedData = updateCompletedFetchThunk(
  "fetchUpdateCompleted",
  UPDATE_COMPLETED_TASKS_API_URL
);

export const fetchUpdateImportantData = updateImportantFetchThunk(
  "fetchUpdateImportant",
  UPDATE_IMPORTANT_TASKS_API_URL
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
    putItemData: null,
    deleteItemData: null,
    updateCompletedData: null,
    updateImportantData: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetItemsData.fulfilled, handleFullfilled("getItemsData"))
      .addCase(fetchGetItemsData.rejected, handleRejected)

      .addCase(fetchPostItemData.fulfilled, handleFullfilled("postItemData"))
      .addCase(fetchPostItemData.rejected, handleRejected)

      .addCase(fetchPutItemData.fulfilled, handleFullfilled("putItemData"))
      .addCase(fetchPutItemData.rejected, handleRejected)

      .addCase(
        fetchDeleteItemData.fulfilled,
        handleFullfilled("deleteItemData")
      )
      .addCase(fetchDeleteItemData.rejected, handleRejected)

      .addCase(
        fetchUpdateCompletedData.fulfilled,
        handleFullfilled("updateCompletedData")
      )
      .addCase(fetchUpdateCompletedData.rejected, handleRejected)

      .addCase(
        fetchUpdateImportantData.fulfilled,
        handleFullfilled("updateImportantData")
      )
      .addCase(fetchUpdateImportantData.rejected, handleRejected);
  },
});

export default apiSlice.reducer;
