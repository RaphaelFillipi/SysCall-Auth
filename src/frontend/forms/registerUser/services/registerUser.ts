import { RegisterUserFormData } from "../schemas/registerUser.schema";
import { nhost } from "../../../../lib/nhost/nhost";

export const registerUser = async (data: RegisterUserFormData) => {

    const { name, surname, email, telephone, password } = data;

    // Registro do usuário na tabela de users do nhost
    try {
        const { error: signUpError, session } = await nhost.auth.signUp({
            email,
            password,
            options: {
                displayName: `${name} ${surname}`,
                metadata: {
                    name,
                    surname,
                    telephone
                }
            }
        });

        if (signUpError) {
            console.error("Erro no cadastro do usuário:", signUpError);
            throw signUpError;
        }
    }
    catch (e) {
        console.error("Não foi possível realizar tal operação: ", e);
        throw e;
    }
};