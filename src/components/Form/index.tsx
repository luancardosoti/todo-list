import { useState, FormEvent } from 'react'
import { PlusCircle } from 'phosphor-react'
import { FormContainer } from './styles'

interface FormProps {
  onCreateTodo: (todo: string) => void
}

export function Form({ onCreateTodo }: FormProps) {
  const [newTodo, setNewTodo] = useState('')

  function handleNewTodo(e: FormEvent) {
    e.preventDefault()
    if (!newTodo.length) {
      return alert('Digite a tarefa!')
    }

    onCreateTodo(newTodo)

    setNewTodo('')
  }

  return (
    <FormContainer onSubmit={handleNewTodo}>
      <input
        placeholder="Adicione uma nova tarefa"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">
        Criar
        <PlusCircle weight="bold" size={16} />
      </button>
    </FormContainer>
  )
}
