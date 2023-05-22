import { FiTrash2  } from "react-icons/fi"

import "./styles.scss"

export default function Task() {
  return(
    <div className="task-container">

      <section>
        <input type="checkbox" />

        <p className="task-description">Primeira tarefa</p>

        <button className="delete-task">
          <FiTrash2 size="18px"/>
        </button>

      </section>  

    </div>  
  )
}