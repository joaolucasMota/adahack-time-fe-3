import { InputHTMLAttributes } from "react";
import { Input } from "./styled";


interface IInputProps {
    type: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}

export const InputComponent = ({ type, placeholder, value, onChange, ...rest } : IInputProps) => {
  return (
    <>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </>
  );
};
