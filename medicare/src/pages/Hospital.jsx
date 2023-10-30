import React, { useEffect } from "react";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import { useDispatch, useSelector } from "react-redux";
import { averageStay, topPerformingWard, updateHospitalStats } from "../features/hospital/hospitalSlice";

import img1 from "../assets/01.svg";
import img2 from "../assets/02.svg";
import img3 from "../assets/03.svg";
import img4 from "../assets/04.svg";

function School() {
  const dispatch = useDispatch();
  const { patients } = useSelector((state) => state.patients);
  const { wards } = useSelector((state) => state.wards);

  const { totalPatients, totalOccupancyRate } =
    useSelector((state) => state.hospital);

  useEffect(() => {
    const totalPatients = patients.length;
    const totalOccupancyRate =
      wards.reduce((total, { capacity }) => total + capacity, 0) /
      totalPatients;
    dispatch(
      updateHospitalStats({
        totalPatients,
        totalOccupancyRate
      })
    );
  }, [patients, dispatch]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-24 mt-14 mx-20">
      <HospitalCard
        label={"Total Patients"}
        value={totalPatients}
        bannerImg={img1}
      />
      <HospitalCard
        label={"Total Occupancy Rate"}
        value={`${totalOccupancyRate.toFixed(1)}%`}
        bannerImg={img2}
      />
      <HospitalCard
        label={"Average Patient Stay"}
        value={`${averageStay} Days`}
        bannerImg={img3}
      />
      <HospitalCard
        label={"Top Performing Ward"}
        value={`${wards[topPerformingWard]?.department.toUpperCase()} WARD`}
        bannerImg={img4}
      />
    </div>
  );
}

export default School;
