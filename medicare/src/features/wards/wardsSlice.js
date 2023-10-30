import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://medicarebackend.shahbazahmad12.repl.co/wards";

export const fetchWards = createAsyncThunk("wards/fetchWards", async () => {
  const response = await axios.get(API);
  return response.data.wards;
});

export const addWardAsync = createAsyncThunk(
  "wards/addWardAsync",
  async (newWard) => {
    const response = await axios.post(API, newWard);
    return response.data;
  }
);

export const updateWardAsync = createAsyncThunk(
  "wards/updateWardAsync",
  async ({ id, updatedWard }) => {
    const response = await axios.post(`${API}/${id}`, updatedWard);
    return response.data;
  }
);

export const deleteWardAsync = createAsyncThunk(
  "wards/deleteWardAsync",
  async (id) => {
    const response = await axios.delete(`${API}/${id}`);
    return response.data;
  }
);

const initialState = {
  wards: [],
  status: "idle",
  error: null,
};

export const wardsSlice = createSlice({
  name: "wards",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchWards.pending]: (state) => {
      state.status = "loading";
    },
    [fetchWards.fulfilled]: (state, action) => {
      state.status = "success";
      state.wards = action.payload;
    },
    [fetchWards.rejected]: (state, action) => {
      state.status = "error";
      console.log(action.error.message);
      state.error = action.error.message;
    },
    [addWardAsync.pending]: (state) => {
      state.status = "loading";
    },
    [addWardAsync.fulfilled]: (state, action) => {
      state.status = "success";
      state.wards.push(action.payload);
    },
    [addWardAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [updateWardAsync.pending]: (state) => {
      state.status = "loading";
    },
    [updateWardAsync.fulfilled]: (state, action) => {
      const updatedWard = action.payload;
      const index = state.wards.findIndex(
        ({ _id }) => _id === updatedWard._id
      );
      state.status = "success";
      if (index !== -1) {
        state.wards[index] = updatedWard;
      }
    },
    [updateWardAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [deleteWardAsync.pending]: (state) => {
      state.status = "loading";
    },
    [deleteWardAsync.fulfilled]: (state, action) => {
      state.status = "success";
      state.wards = state.wards.filter(
        ({ _id }) => _id !== action.payload
      );
    },
    [deleteWardAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
  },
});

export default wardsSlice.reducer;
