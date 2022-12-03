import { HeaderListTodoContainer } from '../style'

interface HeaderListTodoProps {
  todoCreatedCount: number
  todoFinishedCount: number
}

export function HeaderListTodo({
  todoCreatedCount,
  todoFinishedCount,
}: HeaderListTodoProps) {
  const todoFinishedContent =
    todoCreatedCount > 0 ? `${todoFinishedCount} de ${todoCreatedCount}` : '0'

  return (
    <HeaderListTodoContainer>
      <div className="todoCreatedContainer">
        <strong>Tarefas Criadas</strong>
        <span>{todoCreatedCount}</span>
      </div>

      <div className="todoFinishedContainer">
        <strong>Tarefas Concluídas</strong>
        <span>{todoFinishedContent}</span>
      </div>
    </HeaderListTodoContainer>
  )
}
