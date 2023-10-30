import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePatientAsync } from "../../../features/patients/patientsSlice";
import { GrUpdate } from "react-icons/gr";

function EditPatientForm({ openModal, setOpenModal }) {
  const dispatch = useDispatch();
  const [editForm, setEditForm] = useState(openModal.data);

  const { wards } = useSelector((state) => state.wards);

  const handleUpdatePatient = () => {
    dispatch(
      updatePatientAsync({ id: editForm._id, updatedPatient: editForm })
    );
    setOpenModal({ ...openModal, data: editForm, formType: "PatientDetail" });
  };
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div className="flex gap-6 text-lg items-center justify-center">
        <div className="flex flex-col gap-6">
          <p>Name:</p>
          <p>Age:</p>
          <p>Gender:</p>
          <p>Contact:</p>
          <p className="mb-10">Medical History:</p>
          <p>Ward:</p>
        </div>
        <div className="flex flex-col gap-4">
          <input
            value={editForm.name}
            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          />
          <input
            value={editForm.age}
            onChange={(e) =>
              setEditForm({ ...editForm, age: Number(e.target.value) })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="number"
          />
          <select
            onChange={(e) =>
              setEditForm({ ...editForm, gender: e.target.value })
            }
            value={editForm.gender}
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            onChange={(e) =>
              setEditForm({ ...editForm, contact: Number(e.target.value) })
            }
            value={editForm.contact}
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="number"
          />
          <textarea
            value={editForm.medicalHistory}
            onChange={(e) =>
              setEditForm({ ...editForm, medicalHistory: e.target.value })
            }
            className="w-40 h-20 text-sm px-2 py-1 border-slate-600 border rounded-md"
          />
          <select
            onChange={(e) =>
              setEditForm({ ...editForm, ward: e.target.value })
            }
            value={editForm.ward}
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
      <div className="flex gap-8 mb-4">
        <div
          onClick={handleUpdatePatient}
          className="flex items-center justify-center gap-2 bg-green-300 hover:bg-green-400 w-32 py-4 font-bold text-lg drop-shadow-md cursor-pointer rounded-md"
        >
          <GrUpdate />
          <span>Update</span>
        </div>
      </div>
    </div>
  );
}

export default EditPatientForm;
