import { InputProps } from "@/frontend/types/forms/InputProps.type";
import { InputForms } from "../InputForms/InputForms";
import EyeOpen from "../../../assets/icons/icon-eye-open.svg";
import EyeClose from "../../../assets/icons/icon-eye-close.svg";
import "../../../style/index.css";
import { useState } from "react";

export function InputPassword({ register, name, ...rest }: InputProps) {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  return (
    <div className="relative">
      <InputForms
        key={showPassword ? "password" : "text"}
        type={showPassword ? "password" : "text"}
        register={register}
        name={name}
        {...rest}
      />
      <button
        className="absolute right-3 top-0 bottom-0"
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <img src={EyeOpen} alt="Olho aberto" />
        ) : (
          <img src={EyeClose} alt="Olho fechado" />
        )}
      </button>
    </div>
  );
}
