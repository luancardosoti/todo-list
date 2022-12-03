import { useCallback, useState } from 'react'

import { Form } from '../../components/Form'
import { Header } from '../../components/Header'
import { ListTodo } from '../../components/ListTodo'
import { HomeContainer } from './style'

export interface Todo {
  description: string
  finished: boolean
}

export function Home() {
  const [todos, setTodos] = useState<Todo[]>([])

  const onCreateTodo = useCallback((todo: string) => {
    setTodos((state) => [...state, { description: todo, finished: false }])
  }, [])

  const onDeleteTodo = useCallback((indexTodo: number) => {
    setTodos((state) => {
      const todos = [...state]

      todos.splice(indexTodo, 1)

      return todos
    })
  }, [])

  const onUpdateTodo = useCallback((indexTodo: number) => {
    setTodos((state) => {
      const todo = state[indexTodo]

      if (!todo) return state

      const todos = [...state]

      todos.splice(indexTodo, 1, {
        ...todo,
        finished: !todo.finished,
      })

      return todos
    })
  }, [])

  return (
    <HomeContainer>
      <Header />
      <main>
        <Form onCreateTodo={onCreateTodo} />

        <ListTodo
          todos={todos}
          onDeleteTodo={onDeleteTodo}
          onUpdateTodo={onUpdateTodo}
        />
      </main>
    </HomeContainer>
  )
}
