import React from 'react';

const Button = ({ title, onClick, varient }) => {
  return (
    <button
      title={title}
      onClick={onClick}
      name='Disabled'
      disabled
      aria-disabled
    >
      {title}
    </button>
  );
};

export default Button;
