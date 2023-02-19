import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDataContext } from '../../hooks/use-data-context';
import { COLORS } from '../../style/constants/colors';

const CutsomLink = ({ to, children }) => {
  const { reset } = useDataContext();
  let activeStyle = {
    textDecoration: 'none',
    color: COLORS.yellowColor,
    fontWeight: '900',
  };
  let noneActiveStyle = {
    textDecoration: 'none',
    color: COLORS.grayColor,
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
