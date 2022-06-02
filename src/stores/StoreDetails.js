import React from "react";
import { Link, useParams } from "react-router-dom";
import stores from "../json/StoreOption.json";

const StoreDetails = () => {
  const { storeId } = useParams();
  return (
    <div>
      {stores
        .filter((store) => store.id == storeId)
        .map((details, index) => {
          return (
            <>
              <Link className="px-5 py-5 text-base" to="/">
                Back
              </Link>
              <div
                className="flex justify-center items-center w-full"
                key={index}
              >
                <div className="w-full max-w-7xl flex flex-col space-y-5 justify-center items-center px-5 py-5">
                  <span className="text-4xl font-bold text-gray-700">
                    {details.name}
                  </span>
                  <span className="text-2xl font-medium text-gray-700">
                    {details.dep}
                  </span>
                  <img
                    className="w-1/2 h-1/2"
                    src={details.src}
                    alt="storepic"
                  />
                  <span className="text-xl font-serif text-gray-700">
                    {details.detail}
                  </span>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default StoreDetails;
