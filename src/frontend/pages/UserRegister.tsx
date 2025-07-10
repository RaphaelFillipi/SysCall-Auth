import { zodResolver } from "@hookform/resolvers/zod";
import {
  userRegisterSchema,
  UserRegisterFormData,
} from "../validations/zod/schema/userRegister.schema";
import { useForm } from "react-hook-form";
import { FieldError } from "../components/Form/FieldError";
import { InputForms } from "../components/Form/InputForms/InputForms";
import { StandardButton } from "../components/StandardButton";
import { Label } from "../components/Form/Label/Label";
import { InputPassword } from "../components/Form/InputPassword/InputPassword";
import { normalizePhone } from "../validations/forms/normalizePhone";
import { normalizeEmail } from "../validations/forms/normalizeEmail";

export function UserRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterFormData>({
    resolver: zodResolver(userRegisterSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    criteriaMode: "all",
  });

  const onSubmit = (data: UserRegisterFormData) => {
    const normalizedData = {
      ...data,
      telephone: normalizePhone(data.telephone),
      email: normalizeEmail(data.email),
    };
  };

  return (
    <form
      className="text-sm w-full px-8 text-gray-dark space-y-6"
      onSubmit={handleSubmit(onSubmit)}
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
          <InputPassword register={register} name="password" />
          <FieldError error={errors.password} />
        </div>

        <div className="md:w-1/2">
          <Label name="Confirmar Senha:" />
          <InputPassword register={register} name="confirmPassword" />
          <FieldError error={errors.confirmPassword} />
        </div>
      </div>

      <div className="h-full pb-2">
        <StandardButton title="Cadastrar" />
      </div>
    </form>
  );
}
