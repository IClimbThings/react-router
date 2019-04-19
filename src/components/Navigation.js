import React from "react";
import { NavLink } from 'react-router-dom'; 

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/detail">Detail</NavLink>
      <br />
    </div>
  );
};

export default Navigation;