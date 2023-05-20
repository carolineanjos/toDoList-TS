import Header  from "./components/Header/Header";
import Input from "./components/Input/Input";
import Task from "./components/Task/Task";

import './global.scss'
import "./App.scss"

export default function App() {
  return (
    <div>
      <Header/>
      <Input />

      <main>
        <Task />
        <Task />
      </main>
      
    </div>
  )
}
