export function ButtonTitleAuth({ title, active, className, ...rest }) {
  return (
    <div className="w-1/2">
      <button
        className={`text-[22px] h-[46px] w-full transition-colors duration-200 ${className} ${
          active ? "bg-transparent" : "bg-gray-light"
        }`}
        {...rest}
      >
        {title}
      </button>
    </div>
  );
}
