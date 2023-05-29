import { useState, FormEvent, ChangeEvent } from "react";
import Header  from "./components/Header/Header";
import Input from "./components/Input/Input";
import Task from "./components/Task/Task";
import Badge from "./components/Badge/Badge";

import './global.scss'
import "./App.scss"


interface TaskProps {
  title: string;
  isChecked: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [newTaskDescription, setNewTaskDescription] = useState<TaskProps>()

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    if(!newTaskDescription){
      return
    }
    setTasks([newTaskDescription, ...tasks])
    setNewTaskDescription({
      title: "",
      isChecked: false
    })
  }

  function handleTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("")
    setNewTaskDescription({
      title: event.target.value,
      isChecked: false
    })
  }

  function handleCheckedInput(index: number) {
    let checkTask: TaskProps[] = tasks

    checkTask = checkTask.map((item, idx) => {
      if(index === idx){
        return {
          title: item.title,
          isChecked: !item.isChecked
        }
      }
      return item
    })

    return setTasks(checkTask)
  }
 
  function handleDeleteButton(index: number) {
    let deleteTask: TaskProps[] = tasks

    deleteTask = deleteTask.filter((item, idx) => idx !== index)

    setTasks(deleteTask)
  }

  return (
    <div>
      <Header/>
      <Input 
        handleCreateTask={handleCreateTask}
        handleTaskChange={handleTaskChange}
        newTaskDescription={newTaskDescription?.title || ""}
      />
        
      <main>    
        <div className="title-container">
          <p className="tasks"> Tarefas criadas</p>
          <span>
            {<Badge count={tasks?.length}/>}
            </span>
          <p className="tasks-done"> Concluídas </p>
          <span>
            {<Badge count={`${tasks.filter(item => item.isChecked === true).length} de ${tasks?.length}`}/>}
            </span>
        </div>
          
        {tasks.map((item, positionNumber) => {
          return <Task
            isChecked={item.isChecked}
            newTaskDescription={item.title}
            handleCheckedInput={() => handleCheckedInput(positionNumber)}
            handleDeleteButton={() => handleDeleteButton(positionNumber)}
          />
        })}
      </main>
      
    </div>
  )
}
