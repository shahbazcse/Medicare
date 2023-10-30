import { configureStore } from "@reduxjs/toolkit";
import { patientsSlice } from "../features/patients/patientsSlice";
import { wardsSlice } from "../features/wards/wardsSlice";
import { hospitalSlice } from "../features/hospital/hospitalSlice";

export default configureStore({
  reducer: {
    patients: patientsSlice.reducer,
    wards: wardsSlice.reducer,
    hospital: hospitalSlice.reducer,
  },
});
