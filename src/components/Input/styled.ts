import styled from 'styled-components';

export const Input = styled.input`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: .5rem;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: var(--blue-color);
    box-shadow: 0 0 5px var(--blue-color);
  }
`;