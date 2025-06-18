import { useState } from "react";
import { ButtonTitleAuth } from "../components/Form/ButtonTitle/ButtonTitleAuth";
import { RegisterUser } from "./RegisterUser";
import { LoginUser } from "./LoginUser";

export function SwitchFormButton() {
  const [formState, setFormState] = useState(true);

  return (
    <div className="w-full p-4 flex justify-center">
      <div className="bg-green-light w-full text-sm md:text-2xl md:max-w-[591px] rounded-[12px] overflow-hidden h-full">
        <div className="flex flex-row justify-around w-full h-full pb-8">
          <ButtonTitleAuth
            title="Cadastro"
            onClick={() => {
              setFormState(false);
            }}
            active={!formState}
            className={"rounded-br-lg"}
          />
          <ButtonTitleAuth
            title="Login"
            onClick={() => {
              setFormState(true);
            }}
            active={formState}
            className={"rounded-bl-lg"}
          />
        </div>
        {formState === true ? <LoginUser /> : <RegisterUser />}
        {/* <LoginUser /> */}
      </div>
    </div>
  );
}
