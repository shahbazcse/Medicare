import React from "react";
import StudentList from "../components/ListTable/PatientList";

function Student({ setOpenModal }) {
  return (
    <div className="mt-4 ml-8">
      <StudentList setOpenModal={setOpenModal} />
    </div>
  );
}

export default Student;
