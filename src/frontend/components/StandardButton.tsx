export function StandardButton({ title }) {
  return (
    <div>
      <button className="h-[36px] md:h-[59px] w-full bg-green/dark rounded-[8px] text-white font-bold">
        {title}
      </button>
    </div>
  );
}
