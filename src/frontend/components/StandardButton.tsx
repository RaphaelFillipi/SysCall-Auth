export function StandardButton({ title }) {
  return (
    <div>
      <button className="p-2 w-full bg-green-dark rounded-[8px] text-white-primary font-bold text-base lg:text-[17px]">
        {title}
      </button>
    </div>
  );
}
