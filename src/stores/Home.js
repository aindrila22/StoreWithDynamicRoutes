import React from "react";
import StoreOption from "../components/StoreOption";
import stores from "../json/StoreOption.json";

const Home = () => {
  return (
    <div className="w-full md:h-screen flex flex-col gap-5 items-center justify-center bg-green-100">
      <div className="w-full max-w-7xl flex flex-col items-center justify-center space-x-4">
        <span className="text-5xl font-bold text-green-700 pt-4">
          Store Plan
        </span>
        <div className="w-72 md:w-full  flex flex-wrap items-center justify-center mt-8 md:mt-12 gap-5">
          {stores.map((store, index) => {
            return (
              <StoreOption
                index={index}
                storeId={store.id}
                name={store.name}
                dep={store.dep}
                src={store.src}
              />
            );
          })}{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
