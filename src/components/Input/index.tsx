import { Input } from "./styled";

interface IInputProps {
    type: string,
}

export const InputComponent = ({ type, ...rest } : IInputProps) => {
  return (
    <>
      <Input
        type={type === 'password' ? 'password' : type === 'email' ? 'email' : 'text'}
        {...rest}
      />
    </>
  );
};