import React from 'react';

const Button = ({ title, onClick, varient }) => {
  return (
    <button
      title={title}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
