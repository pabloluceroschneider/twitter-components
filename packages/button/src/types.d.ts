export interface ButtonProps {
  id: string;
  onClick?: () => void;
  children: JSX.Element | JSX.Element[] | string;
};
