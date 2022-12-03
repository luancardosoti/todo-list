import styled from 'styled-components'

export const FooterContainer = styled.footer`
  margin-top: auto;

  background-color: ${(props) => props.theme.gray700};
  padding: 0.5rem 0;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${(props) => props.theme.gray300};
  text-align: center;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.gray300};

    :hover {
      text-decoration: underline;
    }
  }
`
