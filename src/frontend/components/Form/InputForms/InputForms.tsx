import { InputProps } from "@/frontend/types/forms/InputProps.type";

export function InputForms({ register, name, className, ...rest }: InputProps) {
  return (
    <div>
      <input
        {...rest}
        {...register(name)}
        className={`h-[32px] w-full text-[16px] md:h-[35px] bg-white rounded-[12px] outline-none px-3 ${className} lg:h-[32px] block`}
      />
    </div>
  );
}
