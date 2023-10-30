import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateWardAsync } from "../../../features/wards/wardsSlice";
import { GrUpdate } from "react-icons/gr";

function EditWardForm({ openModal, setOpenModal }) {
  const dispatch = useDispatch();
  const [editForm, setEditForm] = useState(openModal.data);

  const handleUpdateWard = () => {
    dispatch(updateWardAsync({ id: editForm._id, updatedWard: editForm }));
    setOpenModal({ ...openModal, data: editForm, formType: "WardDetail" });
  };
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div className="flex gap-6 text-lg items-center justify-center">
        <div className="flex flex-col gap-6">
          <p>Ward No:</p>
          <p>Capacity:</p>
          <p>Departments:</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="w-40 px-2 py-1 bg-slate-200 border-slate-600 border rounded-md">
            {editForm.wardNo}
          </p>
          <input
            value={editForm.capacity}
            onChange={(e) =>
              setEditForm({ ...editForm, capacity: Number(e.target.value) })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="number"
          />
          <select
            value={editForm.department}
            onChange={(e) =>
              setEditForm({ ...editForm, department: e.target.value })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          >
            <option value="pediatrics">Pediatrics</option>
            <option value="surgery">Surgery</option>
            <option value="cardiology">Cardiology</option>
            <option value="medicine">Medicine</option>
            <option value="neurology">Neurology</option>
            <option value="emergency">Emergency</option>
            <option value="general">General</option>
          </select>
        </div>
      </div>
      <div className="flex gap-8 mb-4">
        <div
          onClick={handleUpdateWard}
          className="flex items-center justify-center gap-2 bg-green-300 hover:bg-green-400 w-32 py-4 font-bold text-lg drop-shadow-md cursor-pointer rounded-md"
        >
          <GrUpdate />
          <span>Update</span>
        </div>
      </div>
    </div>
  );
}

export default EditWardForm;
