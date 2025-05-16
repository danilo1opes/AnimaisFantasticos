interface InputProps {
  id: string;
  name?: string;
  value: string;
  type?: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  error?: string | null;
}

export function Input({
  id,
  name,
  value,
  type = 'text',
  placeholder,
  onChange,
  onBlur,
  error,
  className,
}: InputProps) {
  return (
    <label htmlFor={id}>
      <input
        id={id}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className={className}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </label>
  );
}
