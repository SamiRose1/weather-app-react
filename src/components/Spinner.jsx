"use client";
import Spin from "../images/spinner.gif";
const Spinner = () => {
  return (
    <span className="w-full h-[100vh] flex justify-center items-center">
      <img className="w-[100px] m-auto block" alt="loading..." src={Spin} />
    </span>
  );
};

export default Spinner;
