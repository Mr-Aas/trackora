import React from 'react'
import { BadgePlus, CircleCheckBig, Trash2, PencilSparkles, DeleteIcon } from 'lucide-react';

import { useState, useEffect } from "react"







export default function Todos() {
  const [isloading, setIsloading] = useState(false)
  const [todos, settodos] = useState<Array<todoDataType>>([{
    id: 12324234,
    date_time: new Date(),
    todo: "complete my life goals before die",
    priority: "high",
    isCompleted: false,
    borderColor: "border-green-700",
    bgColor: "bg-green-300"

  }])
  const [selectedPriority, setselectedPriority] = useState("low")

  useEffect(() => {
    async function gettodos() {
      const data = await localStorage.getItem("todos")
      let oldtodos = JSON.parse(data)
      oldtodos.map((s) => {
        if (s.priority == "high") {
          s.bgColor = "bg-red-200 ";
          s.borderColor = "border-red-700";
        } else if (s.priority == "medium") {
          s.bgColor = "bg-yellow-200";
          s.borderColor = "border-yellow-700";
        } else {
          s.bgColor = "bg-green-300";
          s.borderColor = "border-green-700";
        }
      })
      settodos([...oldtodos])
    }
    gettodos()

  }, [isloading])
  // console.log(Todos)
  interface todoDataType {
    id: any,
    date_time: Date,
    todo: String,
    priority: String,
    isCompleted: Boolean

  }
  let priorities = [
    { label: "high", color: "bg-red-300" },
    { label: "medium", color: "bg-yellow-300" },
    { label: "low", color: "bg-green-300" }
  ]
  function generateUUID() {
    return "xyxx-yxxx-yxxx".replace(/[xy]/g, function () {
      return Math.ceil(Math.random() * 9)
    })
  }
  // console.log(generateUUID())

  // console.log(todoSearch)

  const [formdata, setFormdata] = useState<todoDataType>({
    id: generateUUID(),
    date_time: new Date(),
    todo: "",
    priority: "medium",
    isCompleted: false

  })

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormdata({ ...formdata, id: generateUUID(), todo: event.target.value, date_time: new Date() })

  }
  const handleAdd = () => {
    if (formdata.todo.length == 0) return alert("Empty Todo is not allowed ")
    let newdata = JSON.stringify([...todos, formdata])
    console.log(newdata)
    localStorage.setItem("todos", newdata)
    setIsloading(!isloading)
    setFormdata({
      id: generateUUID(),
      date_time: new Date(),
      todo: "",
      priority: "medium",
      isCompleted: false

    })

  }
  const handleClick = (prio) => {
    formdata.priority = prio.label;
    setselectedPriority(prio.label)
  }
  const handleDelete = (id: any) => {

    // console.log(id)
    console.log(todos)
    settodos(todos.filter((item => item.id !== id)))
    console.log(todos)
    let newdata = JSON.stringify(todos)
    localStorage.setItem("todos", newdata)
  }
  const handleEdit = (task) => {

  }

  return (
    <div className="main ">
      <section className="addtodo bg-blue-200  flex flex-col justify-center items-center  h-[20vh] w-full ">
        <div className="flex justify-center flex-col h-[10vh]  items-center">
          <div className="search  flex  p-6 ">
            <div className="w-[80vw] m-0 p-0">
              <label htmlFor="addtodo" className='font-serif font-bold '>Add Todos</label>
              <input type="text" placeholder=" Add a Todo" id="addtodo" name="todo" value={formdata.todo} onChange={handleChange} className=" w-full h-[40px] rounded-xl border  " />
            </div>
            <div className="button relative w-[10vw] ">

              <button onClick={handleAdd} className="w-16 h-[38px] absolute 
           bottom-1 left-2  rounded-xl"><BadgePlus size={30} color="#4A5565" /></button>
            </div>
          </div>
        </div>
        <div className="priorities flex gap-4  h-[5vh]  items-center w-[90%]">
          <span className='font-bold font-serif'>select Priority : </span>
          {priorities.map((prio) => {
            return (
              <button key={prio.label} onClick={() => handleClick(prio)} className={`selectPriority border w-12 h-6 rounded-xl text-[10px] ${prio.color} ${prio.label == selectedPriority ? "opacity-100" : "opacity-70"}`
              }>
                {prio.label}
              </button>
            )
          })}
        </  div>
      </section >
      <section className="showTodos  bg-blue-100  w-full h-[70vh]  flex flex-col gap-2  items-center">
        <div className="todolist w-[80%]  flex flex-col gap-2 ">

          {todos.map((todo) => {

            return (
              <div className={`flex gap-2 relative justify-centre items-center rounded-lg ${todo.bgColor} ${todo.borderColor} h-[40px] `} key={todo.id}>


                <div className="flex h-[40px] ">
                  <div className="checkbox flex w-10 justify-center items-center ">
                    <input type="checkbox" name="status" className="w-4 h-4" id="checkbox" value={todo.isCompleted} />
                  </div>
                  <div className="todo text-lg font-mono  ml-6 w-full w-[80%] flex justify-center items-center">
                    {todo.todo}
                  </div>
                </div>
                <div className="deletetodo absolute right-12  "><PencilSparkles /></div>
                <div onClick={() => handleDelete(todo.id)} className="deletetodo absolute right-2 "><Trash2 /></div>
              </div>

            )
          })}
        </div>
      </section >
    </div >
  )
}
