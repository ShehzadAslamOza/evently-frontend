import React from "react";
import { Oval } from "react-loader-spinner";

const Spinner = () => {
  return (
    <>
      <div className="absolute w-screen h-screen z-10 bg-black opacity-30"></div>
      <div className="absolute top-1/2 left-1/2">
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    </>
  );
};

export default Spinner;
