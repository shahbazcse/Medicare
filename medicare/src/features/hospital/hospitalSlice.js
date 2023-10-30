import { createSlice } from "@reduxjs/toolkit";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export const averageStay = getRandomIntInclusive(7, 14);
export const topPerformingWard = getRandomIntInclusive(0, 6);

const initialState = {
  totalPatients: 0,
  totalOccupancyRate: 0,
};

export const hospitalSlice = createSlice({
  name: "hospital",
  initialState,
  reducers: {
    updateHospitalStats: (state, action) => {
      state.totalPatients = action.payload.totalPatients;
      state.totalOccupancyRate = action.payload.totalOccupancyRate;
    },
  },
});

export const { updateHospitalStats } = hospitalSlice.actions;

export default hospitalSlice.reducer;
