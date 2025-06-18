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

    console.log("Telefone:", normalizedData.telephone);
    console.log("E-mail:", normalizedData.email);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-sm md:text-2xl w-full h-full px-8 space-y-4"
    >
      <div>
        <label>Nome:</label>
        <InputForms type="text" register={register} name="name" />
        <FieldError error={errors.name} />
      </div>

      <div>
        <label>Sobrenome:</label>
        <InputForms type="text" register={register} name="surname" />
        <FieldError error={errors.surname} />
      </div>

      <div>
        <label>E-mail:</label>
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
        <label>Telefone:</label>
        <InputForms type="text" register={register} name="telephone" />
        <FieldError error={errors.telephone} />
      </div>

      <div>
        <label>Senha:</label>
        <InputForms type="password" register={register} name="password" />
        <FieldError error={errors.password} />
      </div>

      <div>
        <label>Confirme a senha:</label>
        <InputForms
          type="password"
          register={register}
          name="confirmPassword"
        />
        <FieldError error={errors.confirmPassword} />
      </div>

      <div className="h-full pb-2">
        <StandardButton title="Cadastrar" />
      </div>
    </form>
  );
}
