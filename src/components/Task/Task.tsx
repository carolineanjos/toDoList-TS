import { ChangeEvent } from "react"
import { FiTrash2  } from "react-icons/fi"

import "./styles.scss"

interface TaskProps {
  newTaskDescription: string;
  handleCheckedInput: () => void;
  handleDeleteButton: () => void
  isChecked: boolean;
}

export default function Task({newTaskDescription, handleCheckedInput, handleDeleteButton,  isChecked}: TaskProps) {


  return(
    <div className="task-container">

      <section>
        <input checked={isChecked} onChange={handleCheckedInput} type="checkbox" />

        <p className="task-description">{newTaskDescription}</p>

        <button className="delete-task" onClick={handleDeleteButton}>
          <FiTrash2 size="18px"/>
        </button>

      </section>  

    </div>  
  )
}