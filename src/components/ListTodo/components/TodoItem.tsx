import { Trash } from 'phosphor-react'

import { TodoItemContainer } from '../style'

import imgCheck from '../../../assets/check.png'
import imgUncheck from '../../../assets/uncheck.png'
import { Todo } from '../../../pages/Home'

interface TodoItemProps {
  todo: Todo
  handleDeleteTodo: () => void
  handleUpdateTodo: () => void
}
export function TodoItem({
  todo,
  handleDeleteTodo,
  handleUpdateTodo,
}: TodoItemProps) {
  return (
    <TodoItemContainer finished={todo.finished}>
      <button className="buttonUpdateFinished" onClick={handleUpdateTodo}>
        {todo.finished ? (
          <img src={imgCheck} alt="" />
        ) : (
          <img src={imgUncheck} alt="" />
        )}
      </button>
      <p>{todo.description}</p>
      <button className="deleteButton" onClick={handleDeleteTodo}>
        <Trash size={16} />
      </button>
    </TodoItemContainer>
  )
}
