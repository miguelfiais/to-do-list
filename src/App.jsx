import { v4 as uuidv4 } from 'uuid'
import React, { useState } from 'react'

import { Container, ToDoList, InputTask, Task, Trash, Check } from './styles.js'

function App() {

  const [list, setList] = useState([])
  const [task, setTask] = useState()

  function takeTask(event) {
    setTask(event.target.value)

  }
  function addTask() {
    if (task) {
      setList([...list, { id: uuidv4(), task, finished: false }])
    }
  }
  function finalizarTarefa(id) {
    const newList = list.map(item => (
      id === item.id ? { ...item, finished: !item.finished } : item
    ))
    setList(newList)
  }
  function deletarTarefa(id) {
    const newList = list.filter(item => (
      id !== item.id
    ))
    setList(newList)
  }
  return (
    <Container>
      <ToDoList>
        <InputTask>
          <input onChange={takeTask} type="text" placeholder="O que tenho para fazer..." />
          <button onClick={addTask}>Adicionar</button>
        </InputTask>
        <ul>
          {
            list.length > 0 ? (
              list.map(item => (
                <Task key={item.id} isFinished={item.finished}>
                  <Check onClick={() => finalizarTarefa(item.id)} />
                  {item.task}
                  <Trash onClick={() => deletarTarefa(item.id)} />
                </Task>)))
              : (<h3>Não há tarefas</h3>)
          }
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
