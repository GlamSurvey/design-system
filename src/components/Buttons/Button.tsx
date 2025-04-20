import React from 'react';

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className='myinit' {...props}>
      {children}
    </button>
  );
};
