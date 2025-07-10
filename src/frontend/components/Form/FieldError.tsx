import React from "react";
import { FieldErrorProps } from "../../types/validations/FieldErrorProps.type";

export const FieldError: React.FC<FieldErrorProps> = ({ error }) => {
  if (!error) return null;

  const messages = error.types ? Object.values(error.types) : [error.message];

  return (
    <div>
      {messages.map((msg, idx) => (
        <span key={idx}>{msg}</span>
      ))}
    </div>
  );
};
