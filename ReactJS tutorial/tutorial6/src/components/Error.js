import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      Error 404 : Page Not Found
      <button onClick={()=>navigate(-1)}>Go back</button>
    </div>
  );
};

export default Error;
