export function ButtonTitleAuth({ title, active, className, ...rest }) {
  return (
    <div className="w-1/2">
      <button
        className={`text-[22px] p-2 w-full transition-colors duration-200 font-bold ${className} md:text-[24px]  ${
          active ? "bg-transparent" : "bg-gray-light"
        }`}
        {...rest}
      >
        {title}
      </button>
    </div>
  );
}
