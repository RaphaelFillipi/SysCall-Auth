import { useForm } from "react-hook-form";
import { DataLogin } from "../types/login/DataLogin.type";
import { auth } from "../forms/loginUser/authService/auth";
import "../style/forms.css"

export function LoginUser() {

    const { register, handleSubmit } = useForm<DataLogin>();

    // Submit do Formulário
    const onSubmit = async (data: DataLogin) => {
       console.log("E-mail: ", data.email);
       console.log("Senha: ", data.password);

       // Autenticação
       await auth(data);
    };


    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>E-mail:</label>
                    <input type="email" {...register("email")}/>
                </div>

                <div>
                    <label>Senha:</label>
                    <input type="password" {...register("password")}/>
                </div>

                <div>
                    <button>Enviar</button>
                </div>
            </form>
        </div>
    );
}