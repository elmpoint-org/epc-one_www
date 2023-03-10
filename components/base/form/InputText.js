const InputText = ({ label, type, className, ...props }) => {
  return (
    <>
      <label className="block">
        <span className="sr-only text-gray-700">{label}</span>
        <input
          type={type || 'text'}
          className={`block w-full rounded-md border-black/20 bg-zinc-100 py-2.5 px-[15px] text-base focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 ${className}`}
          placeholder={label}
          {...props}
        />
      </label>
    </>
  );
};

export default InputText;
