import React from "react";
import { FieldErrorProps } from "../../types/validators/FieldErrorProps.type";

export const FieldError: React.FC<FieldErrorProps> = ({ error }) => {
  if (!error) return null;

  // Mensagens de erro oriundas do zod
  const messages = error.types ? Object.values(error.types) : [error.message];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '4px',  whiteSpace: "pre-line" }}>
      {messages.map((msg, idx) => (
        <span key={idx}>{msg}</span>
      ))}
    </div>
  );
};
