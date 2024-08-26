import React from "react";
import { MutatingDots } from "react-loader-spinner";

const Spinner = () => {
  return (
    <MutatingDots
      visible={true}
      height="100"
      width="100"
      color="#4fa94d"
      secondaryColor="#4fa94d"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Spinner;
