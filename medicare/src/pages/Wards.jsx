import React from "react";
import TeacherList from "../components/ListTable/WardList";

function Teacher({setOpenModal}) {
  return (
    <div className="mt-4 ml-8">
      <TeacherList setOpenModal={setOpenModal} />
    </div>
  );
}

export default Teacher;
