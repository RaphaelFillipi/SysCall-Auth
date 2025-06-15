import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerUserSchema,
  RegisterUserFormData,
} from "../forms/schemas/registerUser.schema";
import { useForm } from "react-hook-form";
import "../style/forms.css";
import { FieldError } from "../components/Form/FieldError";

export function RegisterUser() {
  // Validação do Zod
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
  const onSubmit = (data: RegisterUserFormData) => { 
    console.log("Nome:", data.name);
    console.log("Sobrenome:", data.surname);
    console.log("E-mail:", data.email);
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
