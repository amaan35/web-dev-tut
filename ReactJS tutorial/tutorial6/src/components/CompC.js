import React, { useContext } from "react";
import { AppState } from "../App";

const CompC = () => {
  const appData = useContext(AppState);
  return (
    <div>
      Inside CompC
      <h4>{appData.name}</h4>
      <h4>{appData.data.id}</h4>
      <h4>{appData.data.age}</h4>
    </div>
  );
};

export default CompC;
