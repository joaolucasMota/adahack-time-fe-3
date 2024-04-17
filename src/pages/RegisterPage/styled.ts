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

export const RegisterContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 5rem;
    margin-bottom: 2rem;

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

    @media (max-width: 720px) 
    {
    padding: 1rem;
    }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  > div {
    margin-bottom: 1rem;

    label {
      font-weight: bold;
    }

    input,
    select {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
    }
  }

  input[type="submit"] {
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
    font-size: 1.2rem;
    margin-bottom: 2rem;
    @media (max-width: 992px) 
        {
        font-size: 1em;
        }
    
    &:hover
    {
        transition: .15s;
        background-color: var(--green-color);
    }
  }
`;
