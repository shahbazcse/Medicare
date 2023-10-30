import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWardAsync } from "../../../features/wards/wardsSlice";
import { BiCheck } from "react-icons/bi";

function AddWardForm({ openModal, setOpenModal }) {
  const dispatch = useDispatch();
  const { wards } = useSelector((state) => state.wards);
  const [wardForm, setWardForm] = useState({
    wardNo: `W${100 + wards.length + 1}`,
    capacity: "",
    department: "",
  });
  const handleAddWard = () => {
    dispatch(addWardAsync(wardForm));
    setOpenModal({ ...openModal, showModal: false });
  };
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div className="flex gap-6 text-lg items-center justify-center">
        <div className="flex flex-col gap-6">
          <p>Ward No:</p>
          <p>Department:</p>
          <p>Capacity:</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="w-40 px-2 py-1 border-slate-600 border rounded-md">
            {wardForm.wardNo}
          </p>
          <select
            value={wardForm.department}
            onChange={(e) =>
              setWardForm({ ...wardForm, department: e.target.value })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          >
            <option value=""></option>
            <option value="pediatrics">Pediatrics</option>
            <option value="surgery">Surgery</option>
            <option value="cardiology">Cardiology</option>
            <option value="medicine">Medicine</option>
            <option value="neurology">Neurology</option>
            <option value="emergency">Emergency</option>
            <option value="general">General</option>
          </select>
          <input
            value={wardForm.capacity}
            onChange={(e) =>
              setWardForm({
                ...wardForm,
                capacity: Number(e.target.value),
              })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="number"
          />
        </div>
      </div>
      <div
        onClick={handleAddWard}
        className="flex items-center justify-center gap-2 bg-green-300 hover:bg-green-400 w-36 py-4 mb-4 font-bold text-lg drop-shadow-md cursor-pointer rounded-md"
      >
        <span>Add</span>
        <BiCheck className="h-6 w-6" />
      </div>
    </div>
  );
}

export default AddWardForm;
