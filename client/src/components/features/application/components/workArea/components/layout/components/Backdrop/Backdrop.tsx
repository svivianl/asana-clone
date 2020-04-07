import React from "react";
import "../../../../../../../../../css/features/application/components/workArea/components/layout/components/Backdrop/Backdrop.css";

const Backdrop = ({ backdropClickHandler }: any) => {
  return <div className="backdrop" onClick={backdropClickHandler}></div>;
};

export default Backdrop;
