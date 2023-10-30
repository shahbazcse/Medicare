import React from "react";
import { RiMentalHealthLine } from "react-icons/ri";
import { BiBed } from "react-icons/bi";

function OptionsModal({ openModal, setOpenModal }) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 mb-4">
      <div
        onClick={() =>
          setOpenModal({
            ...openModal,
            formType: "AddPatient",
          })
        }
        className="flex items-center justify-center gap-2 bg-blue-200 hover:bg-blue-300 w-52 py-4 font-bold text-lg drop-shadow-md cursor-pointer rounded-md"
      >
        <RiMentalHealthLine className="h-10 w-10" />
        <span>Add Patient</span>
      </div>
      <div
        onClick={() =>
          setOpenModal({
            ...openModal,
            formType: "AddWard",
          })
        }
        className="flex items-center justify-center gap-2 bg-green-300 hover:bg-green-400 w-52 py-4 font-bold text-lg drop-shadow-md cursor-pointer rounded-md"
      >
        <BiBed className="h-10 w-10" />
        <span>Add Ward</span>
      </div>
    </div>
  );
}

export default OptionsModal;
