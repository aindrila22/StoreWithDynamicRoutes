import React from "react";
import { useNavigate } from "react-router-dom";

const StoreOption = ({ index, storeId, src, name, dep }) => {
  const navigate = useNavigate();
  const openPageHandler = () => {
    navigate(`/${storeId}`);
  };

  return (
    <div
      key={index}
      onClick={openPageHandler}
      className="md:w-56 h-56 w-full rounded-md shadow-md flex flex-col justify-center items-center bg-slate-100 cursor-pointer font-serif"
    >
      <div className="h-36 w-full">
        <img
          className="object-fit w-full h-full rounded-t-md"
          src={src}
          alt="storepic"
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-3 mb-3">
        <span className="text-lg font-bold text-gray-800">{name}</span>
        <span className="text-sm font-semibold text-gray-600 mt-1">{dep}</span>
      </div>
    </div>
  );
};

export default StoreOption;
