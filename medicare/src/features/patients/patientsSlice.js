import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://medicarebackend.shahbazahmad12.repl.co/patients";

export const fetchPatients = createAsyncThunk(
  "patients/fetchPatients",
  async () => {
    const response = await axios.get(API);
    return response.data.patients;
  }
);

export const addPatientAsync = createAsyncThunk(
  "patients/addPatientAsync",
  async (newPatient) => {
    const response = await axios.post(API, newPatient);
    return response.data;
  }
);

export const updatePatientAsync = createAsyncThunk(
  "patients/updatePatientAsync",
  async ({ id, updatedPatient }) => {
    const response = await axios.post(`${API}/${id}`, updatedPatient);
    return response.data;
  }
);

export const deletePatientAsync = createAsyncThunk(
  "patients/deletePatientAsync",
  async (id) => {
    const response = await axios.delete(`${API}/${id}`);
    return response.data;
  }
);

const initialState = {
  patients: [],
  status: "idle",
  error: null,
  filterQuery: "",
};

export const patientsSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    updateQuery: (state, action) => {
      state.filterQuery = action.payload;
    },
  },
  extraReducers: {
    [fetchPatients.pending]: (state) => {
      state.status = "loading";
    },
    [fetchPatients.fulfilled]: (state, action) => {
      state.status = "success";
      state.patients = action.payload;
    },
    [fetchPatients.rejected]: (state, action) => {
      state.status = "error";
      console.log(action.error.message);
      state.error = action.error.message;
    },
    [addPatientAsync.pending]: (state) => {
      state.status = "loading";
    },
    [addPatientAsync.fulfilled]: (state, action) => {
      state.status = "success";
      state.patients.push(action.payload);
    },
    [addPatientAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [updatePatientAsync.pending]: (state) => {
      state.status = "loading";
    },
    [updatePatientAsync.fulfilled]: (state, action) => {
      const updatedPatient = action.payload;
      const index = state.patients.findIndex(
        ({ _id }) => _id === updatedPatient._id
      );
      state.status = "success";
      if (index !== -1) {
        state.patients[index] = updatedPatient;
      }
    },
    [updatePatientAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [deletePatientAsync.pending]: (state) => {
      state.status = "loading";
    },
    [deletePatientAsync.fulfilled]: (state, action) => {
      state.status = "success";
      state.patients = state.patients.filter(
        ({ _id }) => _id !== action.payload
      );
    },
    [deletePatientAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
  },
});

export const { updateQuery } = patientsSlice.actions;

export default patientsSlice.reducer;
