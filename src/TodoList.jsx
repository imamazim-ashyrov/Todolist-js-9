import React, { useState } from "react";

const TodoList = () => {
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState("")
  const [studentAge, setStudentAge] = useState("")
  const [isMarried, setIsMarried] = useState(null)
  const [profession, setProfession] = useState("")

  console.log(students);
  

  const studentNameChangeHandler = (e) => {
    setStudentName(e.target.value)
  }
  const studentAgeChangeHandler = (e) => {
    setStudentAge(e.target.value)
  }
  const isMarriedChangeHandler = (e) => {
    setIsMarried(e.target.value)
  }
  const professionChangeHandler = (e) => {
    setProfession(e.target.value)
  }

  const clickHandler = () => {
    const newStudent = {
        studentName,
        studentAge,
        isMarried,
        profession
    }

    setStudents([...students, newStudent])
  }

  return (
    <div>
      <input onChange={studentNameChangeHandler} placeholder="Student name..." type="text" /><br />
      <input onChange={studentAgeChangeHandler} placeholder="Student age..." type="text" /><br />
      <input onChange={isMarriedChangeHandler} placeholder="Is married..." type="text" /><br />
      <input onChange={professionChangeHandler} placeholder="Profession..." type="text" /><br />
      <button onClick={clickHandler}>Add Todo</button>
    </div>
  );
};

export default TodoList;
