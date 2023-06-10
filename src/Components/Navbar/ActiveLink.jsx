import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink to={to} className={({ isActive}) =>
      `text-lg hover:link-accent normal-case ${ isActive ? "bg-[#86E5DC] text-black" : ""}`
      }>
            {children}
        </NavLink>
    );
};

export default ActiveLink;