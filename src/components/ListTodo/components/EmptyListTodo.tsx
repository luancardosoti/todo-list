import { EmptyListTodoContainer } from '../style'

import imgClipboard from '../../../assets/clipboard.png'

export function EmptyListTodo() {
  return (
    <EmptyListTodoContainer>
      <img src={imgClipboard} alt="" />

      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong> <br />
        Crie tarefas e organize seus itens a fazer
      </p>
    </EmptyListTodoContainer>
  )
}
