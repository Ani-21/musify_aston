import React from "react";

interface Props {
  border: string;
  color: string;
  children: React.ReactNode;
  onClick: () => void;
  radius: string;
  width: string;
}
// styled.button`
//   background: transparent;
//   border: 2px solid beige;
//   border-radius: 3px;
// `;

const Button: React.FC<Props> = ({
  border,
  color,
  children,
  onClick,
  radius,
  width,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        width,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
