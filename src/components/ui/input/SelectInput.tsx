interface SelectInputProps {
  options: { key?: string; value?: string; label: string }[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectInput({
  options,
  value,
  onChange,
}: SelectInputProps) {
  const defaultValue = options.length > 0 ? options[0].value : "";

  return (
    <select
      className="bg-white border border-[#8E8E8E] rounded md:max-w-[328px] md:w-full w-[175px] p-1.5"
      name=""
      id=""
      value={value || defaultValue}
      onChange={onChange}
    >
      {options.map((option, index) => (
        <option key={option.key ?? index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
