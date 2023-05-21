import React, { FC } from 'react';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({
  id,
  onClick,
  children,
}) => {
	return (
    <button id={id} onClick={onClick}>
      {children}
    </button>
  );
};
