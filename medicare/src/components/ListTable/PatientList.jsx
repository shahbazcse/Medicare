import React from "react";
import { useSelector } from "react-redux";

function PatientList({ setOpenModal }) {
  const { patients, filterQuery } = useSelector((state) => state.patients);

  const filteredPatients = patients.filter(
    ({ name }) =>
      (filterQuery === "") |
      name?.toUpperCase().includes(filterQuery?.toUpperCase())
  );

  return (
    <div className="h-[80vh] overflow-auto drop-shadow-md">
      <table className="w-[80%] text-left">
        <thead className="sticky top-0 bg-blue-300">
          <tr>
            <th className="px-4 py-2 border-r border-b w-[8vh]">#</th>
            <th className="px-4 py-2 border-r border-b">Name</th>
            <th className="px-4 py-2 border-r border-b">Age</th>
            <th className="px-4 py-2 border-r border-b">Gender</th>
            <th className="px-4 py-2 border-b">Ward No.</th>
          </tr>
        </thead>
        <tbody className="bg-[#FFFFFF]">
          {filteredPatients.map((patient, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border-r border-b w-[8vh]">
                #{index + 1}
              </td>
              <td className="px-4 py-2 border-r border-b font-bold">
                <span
                  onClick={() =>
                    setOpenModal({
                      showModal: true,
                      data: patient,
                      formType: "PatientDetail",
                    })
                  }
                  className="underline hover:cursor-pointer hover:text-blue-600"
                >
                  {patient.name}
                </span>
              </td>
              <td className="px-4 py-2 border-r border-b">{patient.age}</td>
              <td className="px-4 py-2 border-r border-b">{patient.gender}</td>
              <td className="px-4 py-2 border-b">{patient.ward}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientList;
