import { useForm } from "react-hook-form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  register: ReturnType<typeof useForm>["register"];
  name: string;
}
