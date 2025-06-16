import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerUserSchema,
  RegisterUserFormData,
} from "../forms/registerUser/schemas/registerUser.schema";
import { useForm } from "react-hook-form";
import "../style/forms.css";
import { FieldError } from "../components/Form/FieldError";
import { normalizeEmail } from "../forms/registerUser/validations/normalizeEmail";
import { normalizePhone } from "../forms/registerUser/validations/normalizePhone";
import { registerUser } from "../forms/registerUser/services/registerUser";
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

  // Submit do Formulário
  const onSubmit = async (data: RegisterUserFormData) => {
    //Tratativas dos dados a serem enviados ao banco
    const normalizedData = {
      ...data,
      telephone: normalizePhone(data.telephone),
      email: normalizeEmail(data.email),
    };

    console.log("Telefone:", normalizedData.telephone);
    console.log("E-mail:", normalizedData.email);

    // Cadastro do Usuário
    //await registerUser(normalizedData);
  };

  return (
    <div className="p-4 flex justify-center w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-11 text-sm md:text-2xl bg-green/light md:max-w-[591px] rounded-[12px] w-full h-full"
      >
        <h1>Cadastro de Usuário</h1>
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

        <StandardButton title="Cadastrar" />
      </form>
    </div>
  );
}
