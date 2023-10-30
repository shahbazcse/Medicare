import React from "react";
import { useDispatch } from "react-redux";
import { deletePatientAsync } from "../../../features/patients/patientsSlice";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

function PatientDetail({ openModal, setOpenModal }) {
  const dispatch = useDispatch();
  const { _id, name, age, gender, contact, medicalHistory, ward } =
    openModal.data;

  const handleDeletePatient = () => {
    dispatch(deletePatientAsync(_id));
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
          <p className="w-40 px-2 py-1 border-slate-600 border rounded-md">
            {name}
          </p>
          <p className="w-40 px-2 py-1 border-slate-600 border rounded-md">
            {age}
          </p>
          <p className="w-40 px-2 py-1 border-slate-600 border rounded-md">
            {gender}
          </p>
          <p className="w-40 px-2 py-1 border-slate-600 border rounded-md">
            {contact}
          </p>
          <p className="w-40 px-2 py-1 border-slate-600 border rounded-md">
            {0}
          </p>
          <p className="w-40 px-2 py-1 border-slate-600 border rounded-md">
            {ward}
          </p>
        </div>
      </div>
      <div className="flex gap-8 mb-4">
        <div
          onClick={() =>
            setOpenModal({
              ...openModal,
              formType: "EditPatient",
            })
          }
          className="flex items-center justify-center gap-2 bg-blue-200 hover:bg-blue-300 w-32 py-4 font-bold text-lg drop-shadow-md cursor-pointer rounded-md"
        >
          <AiOutlineEdit className="h-5 w-5" />
          <span>Edit</span>
        </div>
        <div
          onClick={handleDeletePatient}
          className="flex items-center justify-center gap-2 bg-red-300 hover:bg-red-400 w-32 py-4 font-bold text-lg drop-shadow-md cursor-pointer rounded-md"
        >
          <RiDeleteBin6Line />
          <span>Delete</span>
        </div>
      </div>
    </div>
  );
}

export default PatientDetail;
