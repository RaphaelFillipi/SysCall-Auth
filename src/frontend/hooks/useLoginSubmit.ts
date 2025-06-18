import { auth } from "../services/login/auth";
import { error, log } from "../../utils/logger";
import { token } from "../services/login/token";
import { DataLogin } from "../types/login/DataLogin.type";

export function useLoginSubmit() {
  const handleLogin = async (data: DataLogin) => {
    const result = await auth(data);

    if (result.error) {
      error("Erro ao logar:", result.error.message);
    } else {
      log("Usuário logado com sucesso!");
      log("JWT Token: ", token());
    }
  };

  return { handleLogin };
}
