import { FiTrash2  } from "react-icons/fi"

import "./Task.scss"

export default function Task() {
  return(
    <div className="task-container">

      <section>
        <input type="checkbox" />

        <text>Primeira tarefa</text>

        <button className="delete-task">
          <FiTrash2 />
        </button>

      </section>  

    </div>  
  )
}