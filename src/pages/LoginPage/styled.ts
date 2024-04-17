import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const DivTitle = styled.div`
    flex: 1; 
    min-height: 100vh; 
    color: var(--bg-color-01);
    background-color: var(--green-color);
    padding-left: 5rem;
    padding-top: 5rem;
    font-size: 2rem;
    font-weight: bolder;

    @media (max-width: 992px) 
    {
        font-size: 1.5rem;
    }

    @media (max-width: 768px) 
        {
        font-size: 1rem;
        }

    @media (max-width: 720px) 
    {
    display: none;
    }
`;

export const DivLogin = styled.div`
    flex: 1;
    min-height: 100vh;
    background-color: var(--bg-color-01);
    display: flex;
    flex-direction: column; 
`;

export const LoginContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 5rem;

    > h2 {
        font-size: 4rem;
        font-weight: 400;
        padding-bottom: 5rem;
        color: var(--text-color-01);

        @media (max-width: 992px) 
        {
        font-size: 3rem;
        }

        @media (max-width: 768px) 
        {
        font-size: 2rem;
        }
    }

    >input{
        padding-bottom: 1rem;
    }

    @media (max-width: 720px) 
    {
    padding: 1rem;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    > input[type="submit"] {
    border: 2px solid var(--dark-green-color);
    background-color: var(--dark-green-color);
    color: var(--text-color-01);
    display: inline-block;
    text-decoration: none;
    border-radius: 8px;
    user-select: none;
    font-weight: bold;
    text-align: center;
    padding: 1em;
    color: #fff;
    }
`;


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
  &:first-child {
    margin-bottom: 1rem;
  }
`;

export const RememberPassword = styled.div`
  display: flex;
  align-items: center; 
  justify-content: flex-end; 
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  text-decoration: underline;
  font-weight: 600;
  color: var(--text-color-01);
  font-style: italic;
    
  @media (max-width: 992px) 
        {
        font-size: 1rem;
        }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 3px solid var(--bg-color-03); 
  width: 100%;
  margin: 2rem 0;
  margin-bottom: 2rem;
`;

export const NewAccount = styled.div`
  text-align: center;
  > h3 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 1rem;

    @media (max-width: 992px) 
        {
        font-size: 1.5rem;
        }
  }

  > p {
    font-weight: 300;
    font-size: 1.5rem;
    margin-bottom: 1rem;

    @media (max-width: 992px) 
        {
        font-size: 1rem;
        }
  }
`;
