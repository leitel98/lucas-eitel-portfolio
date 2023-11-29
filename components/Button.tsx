'use client';

import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface ButtonI extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'gradient' | 'border';
  disabled?: boolean;
  size?: 'big' | 'normal'
}

const Button: FC<ButtonI> = ({
  children,
  variant,
  disabled,
  size,
}) => {
  const buttonClassName = `px-8 py-4 rounded-full shadow-sm transition-all duration-50 hover:scale-105 ${
    variant === 'gradient'
      ? 'bg-gradient-to-br from-royal-300 to-royal-500 text-royal-950 hover:bg-gradient-to-br hover:from-royal-200 hover:to-royal-400'
      : 'bg-black text-royal-300 border border-royal-300 hover:bg-royal-950'
  } ${size === 'big' && 'text-lg font-semibold'}`;

  return (
    <button className={buttonClassName} disabled={disabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: 'gradient',
  disabled: false,
  size: 'normal',
};

export default Button;
