import { useForm } from "react-hook-form";
import { useLoginSubmit } from "../hooks/useLoginSubmit";
import { InputForms } from "../components/Form/InputForms/InputForms";
import { StandardButton } from "../components/StandardButton";
import { Label } from "../components/Form/Label/Label";
import { InputPassword } from "../components/Form/InputPassword/InputPassword";

export function LoginUser() {
  const { register, handleSubmit } = useForm();

  const { handleLogin } = useLoginSubmit();

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="w-full px-8 space-y-6 text-gray-dark"
    >
      <div>
        <Label name="E-mail:" />
        <InputForms type="email" register={register} name="email" />
      </div>

      <div>
        <Label name="Senha:" />
        <InputPassword register={register} name="password" />
      </div>

      <div className="h-full pb-2">
        <StandardButton title="Login" />
      </div>
    </form>
  );
}
