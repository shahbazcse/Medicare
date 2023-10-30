import React from "react";
import { useSelector } from "react-redux";

function WardList({ setOpenModal }) {
  const { wards } = useSelector((state) => state.wards);

  return (
    <div className="h-[80vh] overflow-auto drop-shadow-md">
      <table className="w-[80%] text-left">
        <thead className="sticky top-0 bg-blue-300">
          <tr>
            <th className="px-4 py-2 border-r border-b w-[8vh]">#</th>
            <th className="px-4 py-2 border-r border-b">Ward No.</th>
            <th className="px-4 py-2 border-b">Department</th>
          </tr>
        </thead>
        <tbody className="bg-[#FFFFFF]">
          {wards.map((ward, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border-r border-b w-[8vh]">
                #{index + 1}
              </td>
              <td className="px-4 py-2 border-r border-b font-bold">
                <span
                  onClick={() =>
                    setOpenModal({
                      showModal: true,
                      data: ward,
                      formType: "WardDetail",
                    })
                  }
                  className="underline hover:cursor-pointer hover:text-blue-600"
                >
                  {ward.wardNo}
                </span>
              </td>
              <td className="px-4 py-2 border-b">{ward.department.toUpperCase()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WardList;
