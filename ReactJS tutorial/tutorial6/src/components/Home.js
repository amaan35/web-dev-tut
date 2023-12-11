import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([
    { name: "Amaan", age: 22 },
    { name: "Ali", age: 22 },
    { name: "Rahban", age: 22 },
    { name: "Zaid", age: 22 },
  ]);

  const renderUsers = () => {
    return users.map((user, index) => (
      <Link to={`/${index}`}>
        <div key={index} className="data-object">
          <h1>{user.name}</h1>
          <h1>{user.age}</h1>
        </div>
      </Link>
    ));
  };
  return (
    <div>
      {renderUsers()}
      <Outlet />
    </div>
  );
};

export default Home;
