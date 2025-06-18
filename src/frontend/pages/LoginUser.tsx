import { useForm } from "react-hook-form";
import { DataLogin } from "../types/login/DataLogin.type";
import { useLoginSubmit } from "../hooks/useLoginSubmit";

export function LoginUser() {
  const { register, handleSubmit } = useForm<DataLogin>();

  const { handleLogin } = useLoginSubmit();

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
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
