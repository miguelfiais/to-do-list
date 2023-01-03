import { v4 as uuidv4 } from 'uuid'
import React, { useRef, useState } from 'react'

import { Container, ToDoList, InputTask, Task, Trash, Check } from './styles.js'

function App() {

  const [list, setList] = useState([])
  const input = useRef()

  function addTask() {
    if (input.current.value) {
      setList([...list, { id: uuidv4(), task: input.current.value, finished: false }])
      input.current.value = ""
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
        <h1>#todo</h1>
        <InputTask>
          <input ref={input} type="text" placeholder="adicionar tarefas..." />
          <button onClick={addTask}>Add</button>
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
