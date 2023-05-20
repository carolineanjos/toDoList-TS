import { AiOutlinePlusCircle } from "react-icons/ai"

import "./Input.scss"

export default function Input() {
  return (
    <div className="add-task">
        <input placeholder="Adicione uma nova tarefa"/>
        <button>
          <span>Criar</span>
          <AiOutlinePlusCircle />
        </button>
      </div>
  )
}