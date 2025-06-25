import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerUserSchema,
  RegisterUserFormData,
} from "../validations/schemas/registerUser.schema";
import { useForm } from "react-hook-form";
import "../style/forms.css";
import { FieldError } from "../components/Form/FieldError";
import { normalizeEmail } from "../validations/forms/normalizeEmail";
import { normalizePhone } from "../validations/forms/normalizePhone";
import { InputForms } from "../components/Form/Input/Input";
import { StandardButton } from "../components/StandardButton";
import { Label } from "../components/Form/Label/Label";

export function RegisterUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserFormData>({
    resolver: zodResolver(registerUserSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    criteriaMode: "all",
  });

  const onSubmit = async (data: RegisterUserFormData) => {
    const normalizedData = {
      ...data,
      telephone: normalizePhone(data.telephone),
      email: normalizeEmail(data.email),
    };

    // console.log("Telefone:", normalizedData.telephone);
    // console.log("E-mail:", normalizedData.email);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-sm w-full px-8 text-gray-dark space-y-2 lg:space-y-0.5"
    >
      <div>
        <Label name="Nome:" />
        <InputForms type="text" register={register} name="name" />
        <FieldError error={errors.name} />
      </div>

      <div>
        <Label name="Sobrenome:" />
        <InputForms type="text" register={register} name="surname" />
        <FieldError error={errors.surname} />
      </div>

      <div>
        <Label name="E-mail:" />
        <InputForms
          type="text"
          register={register}
          name="email"
          inputMode="email"
          autoComplete="email"
        />
        <FieldError error={errors.email} />
      </div>

      <div>
        <Label name="Telefone:" />
        <InputForms type="text" register={register} name="telephone" />
        <FieldError error={errors.telephone} />
      </div>

      <div className="space-y-6 flex flex-col md:space-y-0  md:flex-row md:space-x-2">
        <div className="md:w-1/2">
          <Label name="Senha:" />
          <InputForms type="password" register={register} name="password" />
          <FieldError error={errors.password} />
        </div>

        <div className="md:w-1/2">
          <Label name="Confirmar Senha:" />
          <InputForms
            type="password"
            register={register}
            name="confirmPassword"
          />
          <FieldError error={errors.confirmPassword} />
        </div>
      </div>

      <div className="h-full pb-2">
        <StandardButton title="Cadastrar" />
      </div>
    </form>
  );
}
