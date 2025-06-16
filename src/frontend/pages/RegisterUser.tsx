import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerUserSchema,
  RegisterUserFormData,
} from "../forms/registerUser/schemas/registerUser.schema";
import { useForm } from "react-hook-form";
import "../style/forms.css";
import { FieldError } from "../components/Form/FieldError";
import { normalizeEmail } from "../forms/registerUser/validations/normalizeEmail";
import { normalizePhone } from "../forms/registerUser/validations/normalizePhone"
import { registerUser } from "../forms/registerUser/services/registerUser";

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
    email: normalizeEmail(data.email)
  };

    console.log("Telefone:", normalizedData.telephone);
    console.log("E-mail:", normalizedData.email);

    // Cadastro do Usuário
    await registerUser(normalizedData);
  };

  return (
    <div>
      <h1>Cadastro de Usuário</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nome:</label>
          <input type="text" {...register("name")} />
          <FieldError error={errors.name} />
        </div>

        <div>
          <label>Sobrenome:</label>
          <input type="text" {...register("surname")} />
          <FieldError error={errors.surname} />
        </div>

        <div>
          <label>E-mail:</label>
          <input type="text" inputMode="email" autoComplete="email" {...register("email")} />
          <FieldError error={errors.email} />
        </div>
        
        <div>
          <label>Telefone:</label>
          <input type="text" {...register("telephone")}/>
          <FieldError error={errors.telephone} />
        </div>

        <div>
          <label>Senha:</label>
          <input type="password" {...register("password")}/>
          <FieldError error={errors.password} /> 
        </div>

        <div>
          <label>Confirme a senha:</label>
          <input type="password" {...register("confirmPassword")}/>
          <FieldError error={errors.confirmPassword} />
        </div>  

        <div>
          <button>Enviar</button>
        </div>
      </form>
    </div>
  );
}
