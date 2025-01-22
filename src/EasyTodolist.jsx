import React, { useState } from 'react'

const initialState = {
    id: null,
    studentName: "",
    studentAge: "",
    isMarried: null,
    profession: "",
    studentPhoto: "",
}

const EasyTodolist = () => {
    const [students, setStudents] = useState([])
    const [inputValue, setInputValue] = useState(initialState)
    console.log(students);
    

    const changeInputHandler = (e) => {
        setInputValue((prevInputValue) => ({
            ...prevInputValue,
            [e.target.name]: e.target.value
        }))
    }

    const clickHandler = () => {
        setStudents([...students, {...inputValue, id: Math.random()}])
    }

  return (
    <div>
      <input name='studentName' onChange={changeInputHandler} placeholder="Student name..." type="text" /><br />
      <input name='studentAge' onChange={changeInputHandler} placeholder="Student age..." type="text" /><br />
      <input name='isMarried' onChange={changeInputHandler} placeholder="Is married..." type="boolean" /><br />
      <input name='profession' onChange={changeInputHandler} placeholder="Profession..." type="text" /><br />
      <input name='studentPhoto' onChange={changeInputHandler} placeholder="Student Photo..." type="text" /><br />
      <button onClick={clickHandler}>Add Todo</button>
      {students.map((el) => <h1 key={el.id}>{el.studentName}</h1>)}
    </div>
  )
}

export default EasyTodolist