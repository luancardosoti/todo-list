import styled from 'styled-components'

export const FormContainer = styled.form`
  transform: translateY(-50%);
  display: flex;
  gap: 0.5rem;

  input {
    width: 100%;
    border-radius: 8px;
    padding: 1rem;
    background-color: ${(props) => props.theme.gray500};
    border: 1px solid ${(props) => props.theme.gray700};
    color: ${(props) => props.theme.gray100};
    outline: none;

    ::placeholder {
      font-size: 1rem;
      color: ${(props) => props.theme.gray300};
      line-height: 140%;
    }

    :focus {
      border-color: ${(props) => props.theme.purple700};
    }
  }

  button {
    border: 0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    padding: 1rem;
    background: ${(props) => props.theme.blue700};
    color: ${(props) => props.theme.gray100};
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 140%;

    cursor: pointer;

    transition: background ease 0.2s;

    :hover {
      background: ${(props) => props.theme.blue500};
    }
  }
`
