import { useForm } from "react-hook-form";
import { useLoginSubmit } from "../hooks/useLoginSubmit";
import { InputForms } from "../components/Form/Input/Input";
import { StandardButton } from "../components/StandardButton";
import { Label } from "../components/Form/Label/Label";

export function LoginUser() {
  const { register, handleSubmit } = useForm();

  const { handleLogin } = useLoginSubmit();

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="w-full px-8 space-y-2 text-gray-dark"
    >
      <div>
        <Label name="E-mail:" />
        <InputForms type="email" register={register} name="email" />
      </div>

      <div>
        <Label name="Senha:" />
        <InputForms type="password" register={register} name="password" />
      </div>

      <div className="h-full pb-2">
        <StandardButton title="Login" />
      </div>
    </form>
  );
}
