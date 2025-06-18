import { DataLogin } from "@/frontend/types/login/DataLogin.type";
import { SignInResponse } from "@nhost/nhost-js";
import { nhost } from "../../../lib/nhost/nhost";

export const auth = async (data: DataLogin): Promise<SignInResponse> => {
  return await nhost.auth.signIn({
    email: data.email,
    password: data.password,
  });
};
