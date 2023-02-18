import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDataContext } from '../../hooks/use-data-context';

const CutsomLink = ({ to, children }) => {
  const { reset } = useDataContext();
  let activeStyle = {
    textDecoration: 'none',
    color: '#fdc936',
    fontWeight: '900',
  };
  let noneActiveStyle = {
    textDecoration: 'none',
    color: '#ebebeb',
  };

  return (
    <NavLink
      style={({ isActive }) => (isActive ? activeStyle : noneActiveStyle)}
      to={to}
      onClick={reset}
    >
      {children}
    </NavLink>
  );
};

export default CutsomLink;
