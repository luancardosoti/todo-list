import { Todo } from '../../pages/Home'
import { EmptyListTodo } from './components/EmptyListTodo'
import { HeaderListTodo } from './components/HeaderListTodo'
import { TodoItem } from './components/TodoItem'

import { ListTodoContainer } from './style'

interface ListTodoProps {
  todos: Todo[]
  onDeleteTodo: (indexTodo: number) => void
  onUpdateTodo: (indexTodo: number) => void
}

export function ListTodo({ todos, onDeleteTodo, onUpdateTodo }: ListTodoProps) {
  const todoCreatedCount = todos.length
  const todoFinishedCount = todos.reduce(
    (acc, todo) => (todo.finished ? acc + 1 : acc),
    0,
  )

  return (
    <ListTodoContainer>
      <HeaderListTodo
        todoCreatedCount={todoCreatedCount}
        todoFinishedCount={todoFinishedCount}
      />

      {todoCreatedCount > 0 ? (
        <ul>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              handleDeleteTodo={() => onDeleteTodo(index)}
              handleUpdateTodo={() => onUpdateTodo(index)}
            />
          ))}
        </ul>
      ) : (
        <EmptyListTodo />
      )}
    </ListTodoContainer>
  )
}
