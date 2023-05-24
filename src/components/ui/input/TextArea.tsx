import React, { useState, ChangeEvent, KeyboardEvent } from "react";

interface TextAreaProps {
  placeholder?: string;
  rows?: number;
  name?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ placeholder, rows, name }) => {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    let inputValue = event.target.value;
    inputValue = inputValue.slice(0, 200);

    inputValue = sanitizeInput(inputValue);

    const lineBreaks = (inputValue.match(/\n/g) || []).length;
    if (lineBreaks > 10) return;

    setValue(inputValue);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    const lineBreaks =
      (event.target as HTMLTextAreaElement).value.match(/\n/g)?.length || 0;
    if (lineBreaks >= 10 && event.key !== "Backspace") event.preventDefault();
  };

  const sanitizeInput = (input: string): string => {
    const restrictedChars = /[><"/;:{}=-]/g;
    return input.replace(restrictedChars, "");
  };

  return (
    <textarea
      className="bg-white rounded border border-[#757575] p-3 max-w-[634px] w-full h-full text-sm"
      placeholder={placeholder}
      name={name}
      rows={rows}
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    ></textarea>
  );
};

export default TextArea;
