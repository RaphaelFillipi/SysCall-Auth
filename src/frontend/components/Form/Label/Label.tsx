import { LabelProps } from "@/frontend/types/forms/LabelProps.type";

export function Label({ name }: LabelProps) {
  return (
    <label className="text-[16px] font-semibold lg:text-[15px]">{name}</label>
  );
}
