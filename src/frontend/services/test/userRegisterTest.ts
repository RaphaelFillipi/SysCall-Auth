import { apolloPublicClient } from "../../../lib/apolloClient/apolloPublicClient";
import { INSERT_USER } from "../../../backend/graphql/mutations/mutationUserRegister";
import { UserRegisterProps } from "../../types/register/UserRegisterProps.type";
import { error } from "../../utils/logger";

export const registerUserTest = async (data: UserRegisterProps) => {
  try {
    const result = await apolloPublicClient.mutate({
      mutation: INSERT_USER,
      variables: {
        name: data.name,
        email: data.email,
        last_name: data.surname,
        telephone: data.telephone,
        password: data.password,
      },
    });

    return result;
  } catch (err) {
    error(`Erro ao efetuar a operação: ${err}`);
  }
};
