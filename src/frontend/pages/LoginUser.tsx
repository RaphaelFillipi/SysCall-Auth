import { useForm } from "react-hook-form";
import { DataLogin } from "../types/login/DataLogin.type";
import { auth } from "../forms/loginUser/authService/auth";
import "../style/forms.css";

export function LoginUser() {
  const { register, handleSubmit } = useForm<DataLogin>();

  const onSubmit = async (data: DataLogin) => {
    console.log("E-mail: ", data.email);
    console.log("Senha: ", data.password);

    //await auth(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-sm md:text-2xl w-full h-full px-8 space-y-4"
    >
      <div>
        <label>E-mail:</label>
        <input type="email" {...register("email")} />
      </div>

      <div>
        <label>Senha:</label>
        <input type="password" {...register("password")} />
      </div>

      <div>
        <button>Enviar</button>
      </div>
    </form>
  );
}
