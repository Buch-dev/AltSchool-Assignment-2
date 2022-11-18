import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export const Products = () => {
    const navigate = useNavigate()
  return (
      <div>
        <input type='search' placeholder="Search products"/>
        <nav>
          <Link to='featured'>Featured</Link>
          <Link to='new'>New</Link>
          <Outlet />
        </nav>
      </div>
  );
};
