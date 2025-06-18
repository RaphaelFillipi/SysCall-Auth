import { parsePhoneNumberFromString } from "libphonenumber-js";
import { validDDDs } from "../forms/validDDDS";
import { z } from "zod";

export const registerUserSchema = z
  .object({
    // Validações do campo name
    name: z.string().superRefine((val, ctx) => {
      // Verifica se o campo está vazio ou só com espaços
      if (!val?.trim()) return;

      // Validação de limite de caracteres
      if (val.length < 3) {
        ctx.addIssue({
          code: z.ZodIssueCode.too_small,
          inclusive: true,
          minimum: 3,
          type: "string",
          message: "O nome deve possuir no mínimo três caracteres\n",
        });
      }

      // Validação para considerar apenas uma palavra no campo
      const words = val.trim().split(/\s+/);

      if (!val?.trim()) return;

      // Validação de uma só palavra
      if (words.length !== 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Digite apenas uma palavra\n",
        });
      }

      // Validação de caracteres e acentuações válidas
      if (!/^[A-Za-zÀ-ÖØ-öø-ÿ]+$/.test(val)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "O nome deve conter apenas letras e acentuações válidas\n",
        });
      }
    }),

    // Validações do campo surname
    surname: z.string().superRefine((val, ctx) => {
      if (!val?.trim()) return;

      // Validação de limite de caracteres
      if (val.length < 2) {
        ctx.addIssue({
          code: z.ZodIssueCode.too_small,
          inclusive: true,
          minimum: 2,
          type: "string",
          message: "O sobrenome deve possuir no mínimo dois caracteres\n",
        });
      }

      // Validação de caracteres e acentuações
      if (!/^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/.test(val)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "O sobrenome deve conter apenas letras e acentuações válidas\n",
        });
      }
    }),

    // Validações do campo email
    email: z.string().superRefine((val, ctx) => {
      if (!val || typeof val !== "string" || !val.trim()) return;

      let emailUser = val.toLocaleLowerCase();

      if (emailUser.endsWith(".")) {
        emailUser = emailUser.slice(0, -1);
      }

      const email = emailUser;

      // Validação de caracteres especiais
      if (!/^[A-Za-z0-9@.]+$/.test(email)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "O e-mail não pode conter caracteres especiais (apenas letras, números, @ e . são permitidos)\n",
        });
      }

      // Validação de '@'
      if (!email.includes("@")) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "O e-mail deve conter o caractere '@'\n",
        });
        return;
      }

      const parts = email.split("@");

      // Validação do formato geral do e-mail
      if (parts.length !== 2) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Formato de e-mail inválido\n",
        });
        return;
      }

      const domain = parts[1];
      const domainParts = domain.split(".");

      // Verifica se tem pelo menos domínio + sufixo
      if (domainParts.length < 2) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Formato de domínio inválido\n",
        });
        return;
      }

      const provider = domainParts[0];
      const suffix = domainParts.slice(1).join(".");

      // Lista de domínios aceitos
      const allowedProviders = ["gmail", "outlook", "yahoo", "baymetrics"];

      // Lista de sufixos de domínios aceitos
      const allowedSuffixes = ["com", "com.br"];

      // Validação de domínio
      if (!allowedProviders.includes(provider)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "O provedor não é permitido\n",
        });
      }

      // Validação de sufixo
      if (!allowedSuffixes.includes(suffix)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "O domínio deve terminar com '.com' ou '.com.br'\n",
        });
      }
    }),

    // Validação de Telefone
    telephone: z.string().superRefine((val, ctx) => {
      if (!val?.trim()) return;

      const match = val.match(/^\+55\s?(\d{2,3})/);

      // Validação do formato do telefone (código postal + ddd + número)
      if (!match) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Formato inválido. Use o formato: +55 DDD Número.\n",
        });
        return;
      }

      const rawDDD = match[1];

      // Validação de DDD com 2 dígitos (que é o esperado para o Brasil)
      if (rawDDD.length !== 2) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "O DDD deve ter 2 dígitos válidos.\n",
        });
        return;
      }

      // Validação de DDD
      if (!validDDDs.includes(rawDDD)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `DDD inválido para o Brasil: ${rawDDD}\n`,
        });
      }

      const phoneNumber = parsePhoneNumberFromString(val, "BR");

      // Validação de formato do número de telefone
      if (!phoneNumber || !phoneNumber.isValid()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Número de telefone inválido para o Brasil.\n",
        });

        return;
      }
    }),

    // Validação de Senha
    password: z.string().superRefine((val, ctx) => {
      if (!val?.trim()) return;

      // Validação do mínimo de caracteres da senha
      if (val.length < 12) {
        ctx.addIssue({
          code: z.ZodIssueCode.too_small,
          minimum: 12,
          type: "string",
          inclusive: true,
          message: "A senha deve conter no mínimo 12 caracteres\n",
        });
      }

      // Validação de caracteres especiais
      if (!/[^A-Za-z0-9]/.test(val)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "A senha deve conter pelo menos um caractere especial\n",
        });
      }

      // Validação de letra maiúscula
      if (!/[A-Z]/.test(val)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "A senha deve conter pelo menos uma letra maiúscula\n",
        });
      }

      // Validação de letra minúscula
      if (!/[a-z]/.test(val)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "A senha deve conter pelo menos uma letra minúscula\n",
        });
      }

      // Validação de número na senha
      if (!/[0-9]/.test(val)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "A senha deve conter pelo menos um número\n",
        });
      }
    }),

    // Validação de Confirmação de senha
    confirmPassword: z.string(),
  })
  // Validações globais
  .superRefine((data, ctx) => {
    // Campos vazios
    const nameEmpty = !data.name?.trim();
    const surnameEmpty = !data.surname?.trim();
    const emailEmpty = !data.email?.trim();
    const telephoneEmpty = !data.telephone?.trim();
    const passwordEmpty = !data.password?.trim();
    const confirmPasswordEmpty = !data.confirmPassword?.trim();

    // Validação de todos os campos vazios
    if (
      !data.name.trim() &&
      !data.surname.trim() &&
      !data.email.trim() &&
      !data.telephone &&
      !data.password?.trim() &&
      !data.confirmPassword?.trim()
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Todos os campos devem ser preenchidos\n",
        path: ["confirmPassword"],
      });

      return;
    }

    // Validação de campo 'name' vazio
    if (nameEmpty) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["name"],
        message: "O nome é obrigatório\n",
      });
    }

    // Validação de campo 'surname' vazio
    if (surnameEmpty) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["surname"],
        message: "O sobrenome é obrigatório\n",
      });
    }

    // Validação de campo 'email' vazio
    if (emailEmpty) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["email"],
        message: "O e-mail é obrigatório\n",
      });
    }

    // Validação de campo 'telefone' vazio
    if (telephoneEmpty) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["telephone"],
        message: "O telefone é obrigatório\n",
      });
    }

    // Validação de campo 'password' vazio
    if (passwordEmpty) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["password"],
        message: "A senha é obrigatória\n",
      });
    }

    // Validação de campo 'confirmPassword' vazio
    if (confirmPasswordEmpty) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirmPassword"],
        message: "A confirmação de senha é obrigatória\n",
      });

      return;
    }

    // Validação de 'name' e 'surname' idênticos
    if (
      data.name.trim() &&
      data.surname.trim() &&
      data.name.trim().toLowerCase() === data.surname.trim().toLowerCase()
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["surname"],
        message: "O nome e o sobrenome não podem ser iguais\n",
      });
    }

    // Validação de igualdade entre senha e confirmação de senha
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirmPassword"],
        message: "A confirmação de senha não confere com a senha\n",
      });
    }
  });

export type RegisterUserFormData = z.infer<typeof registerUserSchema>;
