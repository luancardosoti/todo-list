/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components'

export const ListTodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`

export const HeaderListTodoContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    font-weight: 700;

    strong {
      font-size: 0.875rem;
      @media screen and (max-width: 360px) {
        width: min-content;
      }
    }

    span {
      font-size: 0.75rem;
      background-color: ${(props) => props.theme.gray500};
      color: ${(props) => props.theme.gray100};
      padding: 0.125rem 0.5rem;
      border-radius: 9999px;
      white-space: nowrap;
    }

    &.todoCreatedContainer strong {
      color: ${(props) => props.theme.blue500};
    }

    &.todoFinishedContainer strong {
      color: ${(props) => props.theme.purple500};
    }
  }
`

export const EmptyListTodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  text-align: center;
  padding: 4rem 0;

  line-height: 140%;
  color: ${(props) => props.theme.gray300};

  border-top: 1px solid ${(props) => props.theme.gray300};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

interface TodoItemContainerProps {
  finished: boolean
}

export const TodoItemContainer = styled.li<TodoItemContainerProps>`
  background: ${(props) => props.theme.gray500};
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  p {
    width: 100%;
    line-height: 140%;
    font-size: .875rem;

    ${props => props.finished && css`
      text-decoration: line-through;
      color: ${(props) => props.theme.gray300};
    `}
  }

  button {
    border: 0;
    background: none;
    cursor: pointer;

    &.deleteButton {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: .25rem;
      border-radius: 4px;

      transition: all ease .2s;

      svg {
        color: ${(props) => props.theme.gray300};
      }
      
      :hover {
        background-color:  ${(props) => props.theme.gray400};
        svg {
          color: ${(props) => props.theme.red500};
        }
      }
    }
  }
`
