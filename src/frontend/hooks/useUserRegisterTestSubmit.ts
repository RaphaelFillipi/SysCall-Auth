import { registerUserTest } from "../services/test/userRegisterTest";
import { log, error } from "../utils/logger";
import { UserRegisterProps } from "../types/register/UserRegisterProps.type";

export function useUserRegisterTestSubmit() {
  const handleUserRegisterTest = async (data: UserRegisterProps) => {
    const result = await registerUserTest(data);

    if (result) {
      log("Data => ", result);
    } else {
      error("Ocorreu algum erro na requisição");
    }
  };

  return { handleUserRegisterTest };
}
