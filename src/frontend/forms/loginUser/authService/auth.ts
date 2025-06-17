import { useNhostClient } from "@nhost/react";
import { DataLogin } from "@/frontend/types/login/DataLogin.type";
import { token } from "./tokenJWT/token";

export const auth = async (data: DataLogin) => {
  const nhost = useNhostClient();
  const result = await nhost.auth.signIn({
    email: data.email,
    password: data.password,
  });

  if (result.error) {
    console.log("Erro ao logar: ", result.error.message);
  } else {
    console.log("User logado com sucesso!");
    console.log("JWT Token:", token());
  }
};
