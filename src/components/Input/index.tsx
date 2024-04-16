import { Input } from "./styled";

interface IInputProps {
    type: string;
    placeholder?: string; 
}

export const InputComponent = ({ type, placeholder, ...rest } : IInputProps) => {
  return (
    <>
      <Input
        type={type === 'password' ? 'password' : type === 'email' ? 'email' : 'text'}
        placeholder={placeholder}
        {...rest}
      />
    </>
  );
};
