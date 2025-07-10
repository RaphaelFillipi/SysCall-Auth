import { UserRegisterProps } from "@/frontend/types/register/UserRegisterProps.type";
import { nhost } from "@/lib/nhost/nhost";

export const userRegister = async (data: UserRegisterProps) => {
  const { name, surname, email, telephone, password } = data;

  try {
    const { error: signUpError } = await nhost.auth.signUp({
      email,
      password,
      options: {
        displayName: `${name} ${surname}`,
        metadata: {
          name,
          surname,
          telephone,
        },
      },
    });

    if (signUpError) {
      //console.error("Erro no cadastro do usuário:", signUpError);
      throw signUpError;
    }
  } catch (e) {}
};
