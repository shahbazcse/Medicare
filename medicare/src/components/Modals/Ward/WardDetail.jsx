import React from "react";
import { useDispatch } from "react-redux";
import { deleteWardAsync } from "../../../features/wards/wardsSlice";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

function WardDetail({ openModal, setOpenModal }) {
  const dispatch = useDispatch();
  const { _id, wardNo, capacity, department } = openModal.data;

  const handleDeleteWard = () => {
    dispatch(deleteWardAsync(_id));
    setOpenModal({ ...openModal, showModal: false });
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div className="flex gap-8 text-xl">
        <div className="flex flex-col gap-2">
          <p>Ward No:</p>
          <p>Capacity:</p>
          <p>Department:</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>{wardNo}</p>
          <p>{capacity}</p>
          <p>{department.toUpperCase()}</p>
        </div>
      </div>
      <div className="flex gap-8 mb-4">
        <div
          onClick={() =>
            setOpenModal({
              ...openModal,
              formType: "EditWard",
            })
          }
          className="flex items-center justify-center gap-2 bg-blue-200 hover:bg-blue-300 w-32 py-4 font-bold text-lg drop-shadow-md cursor-pointer rounded-md"
        >
          <AiOutlineEdit className="h-5 w-5" />
          <span>Edit</span>
        </div>
        <div
          onClick={handleDeleteWard}
          className="flex items-center justify-center gap-2 bg-red-300 hover:bg-red-400 w-32 py-4 font-bold text-lg drop-shadow-md cursor-pointer rounded-md"
        >
          <RiDeleteBin6Line />
          <span>Delete</span>
        </div>
      </div>
    </div>
  );
}

export default WardDetail;
