import "./App.css";
import LeftNavBar from "./components/LeftNavBar/LeftNavBar";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Patients from "./pages/Patients";
import Wards from "./pages/Wards";
import Hospital from "./pages/Hospital";
import Modal from "./components/Modals/Modal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatients } from "./features/patients/patientsSlice";
import { fetchWards } from "./features/wards/wardsSlice";
import NonDesktopPage from "./pages/NonDesktopPage";

function App() {
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState({
    showModal: false,
    data: null,
    formType: null,
  });

  const { patients } = useSelector((state) => state.patients);
  const { wards } = useSelector((state) => state.wards);

  useEffect(() => {
    dispatch(fetchPatients());
    dispatch(fetchWards());
  }, [dispatch, patients, wards]);

  return (
    <>
    <div className="block xl:hidden h-screen">
        <NonDesktopPage />
      </div>
    <div className="hidden xl:flex flex-col justify-center items-center h-screen">
      <TopNavBar setOpenModal={setOpenModal} />
      <div className="flex h-[90%] w-full">
        <div className="w-[20%] ml-8">
          <LeftNavBar />
        </div>
        <div className="w-[80%]">
          <Routes>
            <Route
              path="/"
              element={<Patients setOpenModal={setOpenModal} />}
            />
            <Route
              path="/patients"
              element={<Patients setOpenModal={setOpenModal} />}
            />
            <Route
              path="/wards"
              element={<Wards setOpenModal={setOpenModal} />}
            />
            <Route path="/hospital" element={<Hospital />} />
          </Routes>
        </div>
        {openModal.showModal && (
          <Modal openModal={openModal} setOpenModal={setOpenModal} />
        )}
      </div>
    </div>
    </>
  );
}

export default App;
