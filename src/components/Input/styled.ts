import styled from 'styled-components';

export const Input = styled.input`
  padding: 1rem;
  border: 1px solid var(--bg-color-03);
  border-radius: .5rem;
  font-size: 1rem;
  outline: none;
  &:focus {
    border-color: var(--bg-color-03);
    box-shadow: 0 0 5px var(--bg-color-03);
  }
`;