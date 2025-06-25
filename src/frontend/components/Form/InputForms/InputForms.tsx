import { InputProps } from "@/frontend/types/forms/InputProps.type";

export function InputForms({ register, name, ...rest }: InputProps) {
  return (
    <input
      {...rest}
      {...register(name)}
      className="h-[32px] w-full text-[16px] md:h-[35px] bg-white rounded-[12px] outline-none pl-3 lg:h-[32px] block"
    />
  );
}
