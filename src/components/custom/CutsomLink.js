import React from 'react';
import { Link } from 'react-router-dom';

const CutsomLink = ({ to, children }) => {
  return (
    <Link style={{ textDecoration: 'none' }} to={to}>
      {children}
    </Link>
  );
};

export default CutsomLink;
