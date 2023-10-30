import React from "react";
import { useNavigate } from "react-router-dom";
import { GiLoveInjection } from "react-icons/gi";

function Logo() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/")} className="cursor-pointer">
      <GiLoveInjection className="h-16 w-16" />
    </div>
  );
}

export default Logo;
