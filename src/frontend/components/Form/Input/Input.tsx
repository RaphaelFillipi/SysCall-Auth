import { InputProps } from "@/frontend/types/forms/InputProps.type";

export function InputForms({ register, name, ...rest }: InputProps) {
  return (
    <input
      {...rest}
      {...register(name)}
      className="h-[32px] text-sm md:h-[40px] bg-white w-full rounded-[8px]"
    />
  );
}
