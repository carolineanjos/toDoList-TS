import Header  from "./components/Header/Header";
import Input from "./components/Input/Input";
import Task from "./components/Task/Task";
import Badge from "./components/Badge/Badge";

import './global.scss'
import "./App.scss"

export default function App() {
  return (
    <div>
      <Header/>
      <Input />

        
      <main>
        <div className="title-container">
          <p className="tasks"> Tarefas criadas</p>
          <span>{<Badge count={5}/>}</span>
          <p className="tasks-done"> Concluídas {} </p>
          <span>{<Badge count={`${5} de ${7}`}/>}</span>
        </div>
        <Task />
        <Task />
      </main>
      
    </div>
  )
}
