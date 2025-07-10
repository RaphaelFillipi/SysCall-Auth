import { DataLogin } from "@/frontend/types/login/DataLogin.type";
import { SignInResponse } from "@nhost/nhost-js";
import { nhost } from "../../../lib/nhost/nhost";
import { error } from "../../utils/logger";

export const auth = async (data: DataLogin): Promise<SignInResponse> => {
  try {
    const result = await nhost.auth.signIn({
      email: data.email,
      password: data.password,
    });

    return result;
  } catch (e) {
    error("Não foi possível efetuar a autenticação");
  }
};
