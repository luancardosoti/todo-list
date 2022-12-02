import { useCallback, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { Header } from './components/Header'
import { Form } from './components/Form'
import { ListTodo } from './components/ListTodo'

export interface Todo {
  description: string
  finished: boolean
}

export function App() {
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
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <main
        style={{
          maxWidth: '46rem',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '4rem',
        }}
      >
        <Form onCreateTodo={onCreateTodo} />

        <ListTodo
          todos={todos}
          onDeleteTodo={onDeleteTodo}
          onUpdateTodo={onUpdateTodo}
        />
      </main>

      <GlobalStyle />
    </ThemeProvider>
  )
}
