import { HeaderListTodoContainer } from '../style'

interface HeaderListTodoProps {
  todoCreatedCount: number
  todoFinishedCount: number
}

export function HeaderListTodo({
  todoCreatedCount,
  todoFinishedCount,
}: HeaderListTodoProps) {
  return (
    <HeaderListTodoContainer>
      <div className="todoCreatedContainer">
        <strong>Tarefas Criadas</strong>
        <span>{todoCreatedCount}</span>
      </div>

      <div className="todoFinishedContainer">
        <strong>Tarefas Concluídas</strong>
        <span>{todoFinishedCount}</span>
      </div>
    </HeaderListTodoContainer>
  )
}
