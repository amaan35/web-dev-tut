/*
    This component is used to understand the use of useContext hook
    It is recieving the color without using any props from child component
*/
/*import React, { useContext } from "react";
import { globalInfo } from "../App";

const SuperChild = () => {
  const { appColor, getDay } = useContext(globalInfo);
  const day = "sunday";
  return (
    <div>
      <h4 style={{ color: appColor }}>SuperChild Component</h4>
      <button onClick={()=>getDay(day)}>get day</button>
    </div>
  );
};

export default SuperChild;
*/