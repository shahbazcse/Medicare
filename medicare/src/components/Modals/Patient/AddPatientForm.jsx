import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPatientAsync } from "../../../features/patients/patientsSlice";
import { BiCheck } from "react-icons/bi";

function AddPatientForm({ openModal, setOpenModal }) {
  const dispatch = useDispatch();
  const { wards } = useSelector((state) => state.wards);
  const [patientForm, setPatientForm] = useState({
    name: "",
    age: 0,
    gender: "",
    contact: 0,
    medicalHistory: [],
    ward: "",
  });
  const handleAddPatient = () => {
    dispatch(addPatientAsync(patientForm));
    setOpenModal({ ...openModal, showModal: false });
  };
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div className="flex gap-6 text-lg items-center justify-center">
        <div className="flex flex-col gap-6">
          <p>Name:</p>
          <p>Age:</p>
          <p>Gender:</p>
          <p>Contact:</p>
          <p>Medical History:</p>
          <p>Ward:</p>
        </div>
        <div className="flex flex-col gap-4">
          <input
            value={patientForm.name}
            onChange={(e) =>
              setPatientForm({ ...patientForm, name: e.target.value })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          />
          <input
            value={patientForm.age || ""}
            onChange={(e) =>
              setPatientForm({ ...patientForm, age: Number(e.target.value) })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="number"
          />
          <select
            value={patientForm.gender}
            onChange={(e) =>
              setPatientForm({ ...patientForm, gender: e.target.value })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          >
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            value={patientForm.contact || ""}
            onChange={(e) =>
              setPatientForm({
                ...patientForm,
                contact: Number(e.target.value),
              })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="number"
          />
          <input
            value={patientForm.attendance || ""}
            onChange={(e) =>
              setPatientForm({
                ...patientForm,
                attendance: Number(e.target.value),
              })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="number"
          />
          <select
            onChange={(e) =>
              setPatientForm({ ...patientForm, ward: e.target.value })
            }
            value={patientForm.ward}
            className="w-40 text-sm px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          >
            {wards.map((ward, index) => (
              <option key={index} value={ward.wardNo}>
                {ward.wardNo} - {ward.department.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div
        onClick={handleAddPatient}
        className="flex items-center justify-center gap-2 bg-green-300 hover:bg-green-400 w-36 py-4 mb-4 font-bold text-lg drop-shadow-md cursor-pointer rounded-md"
      >
        <span>Add</span>
        <BiCheck className="h-6 w-6" />
      </div>
    </div>
  );
}

export default AddPatientForm;
