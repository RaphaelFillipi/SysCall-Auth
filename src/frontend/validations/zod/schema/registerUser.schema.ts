import * as z from "zod";

import {
  EMAIL_ALLOWED_REGEX,
  LOWERCASE_REGEX,
  NAME_REGEX,
  NUMBER_REGEX,
  CONTAINS_SPECIAL_CHAR_REGEX,
  SURNAME_REGEX,
  UPPERCASE_REGEX,
} from "../../../utils/regex";

export const registerUserSchema = z
  .object({
    // Validações do campo name
    name: z
      .string()
      .min(3, "O nome tem menos de três caracteres\n")
      .transform((val) => val.trim())

      .refine((val) => val.split(/\s+/).length === 1, {
        message: "Apenas uma palavra\n",
      })
      .refine((val) => NAME_REGEX.test(val), {
        message: "Caracteres inválidos\n",
      }),

    // Validações do campo surname
    surname: z
      .string()
      .min(2, "O sobrenome tem menos de dois caracteres\n")
      .transform((val) => val.trim())
      .refine((val) => SURNAME_REGEX.test(val), {
        message: "Caracteres inválidos\n",
      }),

    // Validações do campo email
    email: z
      .string()
      .email("Formato de e-mail inválido\n")
      .transform((val) => val.trim())
      .refine((val) => val === val.toLowerCase(), {
        message: "Caracteres maiúsculos\n",
      })
      .refine((val) => EMAIL_ALLOWED_REGEX.test(val), {
        message: "Caracteres inválidos\n",
      }),

    // Validação de Telefone
    telephone: z.string().transform((val) => val.trim()),

    // Validação de Senha
    password: z
      .string()
      .min(12, "Deve ter 12 caracteres")
      .transform((val) => val.trim())
      .refine((val) => CONTAINS_SPECIAL_CHAR_REGEX.test(val), {
        message: "Deve ter caracteres especiais\n",
      })
      .refine((val) => UPPERCASE_REGEX.test(val), {
        message: "Deve ter letras maiúsculos\n",
      })
      .refine((val) => LOWERCASE_REGEX.test(val), {
        message: "Deve ter letras minúsculas\n",
      })
      .refine((val) => NUMBER_REGEX.test(val), {
        message: "Deve ter um número\n",
      }),

    // Validação de Confirmação de senha
    confirmPassword: z.string(),
  })
  // Validações globais
  .refine((data) => data.password === data.confirmPassword, {
    message: "A confirmação de senha não confere com a senha\n",
    path: ["confirmPassword"],
  })
  .refine((data) => data.name.toLowerCase() !== data.surname.toLowerCase(), {
    message: "O nome e o sobrenome não podem ser iguais\n",
    path: ["surname"],
  });

export type RegisterUserFormData = z.infer<typeof registerUserSchema>;
