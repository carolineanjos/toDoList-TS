import { AiOutlinePlusCircle } from "react-icons/ai"
import { ChangeEvent, FormEvent } from "react"

import "./styles.scss"

interface InputProps {
  handleTaskChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCreateTask: (event: FormEvent) => void;
  newTaskDescription: string;
}

export default function Input({handleTaskChange, handleCreateTask, newTaskDescription}: InputProps) {

  return (
    <div>
      <form className="add-task" onSubmit={handleCreateTask}>
        <input value={newTaskDescription} onChange={handleTaskChange} placeholder="Adicione uma nova tarefa"/>
        <button className="create-button" type="submit">
          <span>Criar</span>
          <AiOutlinePlusCircle />
        </button>
      </form>
    </div>
  )
}