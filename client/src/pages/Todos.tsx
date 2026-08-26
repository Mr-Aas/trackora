import React from 'react'
import { BadgePlus, Trash2, PencilSparkles, ShieldCheck } from 'lucide-react';

import { useState, useEffect } from "react"


export default function Todos() {
  const [isloading, setIsloading] = useState(false)
  const [todos, settodos] = useState<Array<todoDataType>>([{
    id: 12324234,
    date_time: new Date(),
    todo: "complete my life goals before die",
    priority: "high",
    isCompleted: false,
  }])
  const [selectedPriority, setselectedPriority] = useState("low")
  const [todosstate, setodosstate] = useState<boolean>(false)

  useEffect(() => {
    async function gettodos() {
      const data = await localStorage.getItem("todos")
      let oldtodos = JSON.parse(data ? data : "")
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
  // 
  interface todoDataType {
    id: any,
    date_time: Date,
    todo: String,
    priority: String,
    isCompleted: Boolean,
    bgColor?: String,
    borderColor?: String

  }
  let priorities = [
    { label: "high", color: "bg-red-300" },
    { label: "medium", color: "bg-yellow-300" },
    { label: "low", color: "bg-green-300" }
  ]
  function generateUUID() {
    // was called")
    return "xyxx-yxxx-yxxx".replace(/[xy]/g, function () {
      return `${Math.ceil(Math.random() * 9)}`
    })
  }

  const completed = todos.filter(s => s.isCompleted == true)
  const pending = todos.filter(s => s.isCompleted !== true)
  // 

  // 

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
    setFormdata({ ...formdata, todo: event.target.value })

  }

  const handlecheck = (id: any) => {
    for (const todo of todos) {
      if (todo.id == id) {
        todo.isCompleted = true
      }
    }
    localStorage.setItem("todos", JSON.stringify(todos))
    setIsloading(!isloading)

  }


  const handleAdd = () => {
    if (formdata.todo.length == 0) return alert("Empty Todo is not allowed ")
    let newdata = JSON.stringify([...todos, formdata])
    // 
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
  const handleClick = (prio: any) => {
    formdata.priority = prio.label;
    setselectedPriority(prio.label)
  }
  const handleDelete = (id: any) => {

    // 
    // 
    settodos(todos.filter((item => item.id !== id)))
    //
    let newdata = JSON.stringify(todos)
    localStorage.setItem("todos", newdata)
  }
  const handleEdit = (id: any) => {
    let [selected] = todos.filter((s) => s.id == id)

    setFormdata({
      id: selected.id,
      date_time: selected.date_time,
      todo: selected.todo,
      priority: "",
      isCompleted: false

    })
    handleDelete(selected.id)


  }

  return (
    <div className="main">
      <section className="addtodo bg-blue-200  flex flex-col justify-center items-center  h-[20vh] w-full ">
        <div className="flex justify-center flex-col h-[10vh]  items-center">
          <div className="search  flex  p-6 ">
            <div className="w-[80vw] m-0 p-0">
              <label htmlFor="addtodo" className='font-serif font-bold '>Add Todos</label>
              <input type="text" placeholder=" Add a Todo" id="addtodo" name="todo" value={formdata?.todo} onChange={handleChange} className=" w-full h-10 rounded-xl border  " />
            </div>
            <div className="button relative w-[10vw] ">

              <button onClick={handleAdd} className="w-16 h-9.5 absolute 
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

      <section className="showTodos overflow-scroll bg-blue-100  w-full h-[70vh]  flex flex-col gap-2  items-center border relative">
        {/* <div className="stickyplate  sticky top-0 z-20 w-full border min-h-12  flex justify-center items-center ">
        </ div> */}

        <div className="todostates h-10 items-center font-bold flex  z-20  bg-[#e5e8eb] gap-2 border sticky top-4   rounded-3xl">
          <span onClick={() => setodosstate(false)} className={`states  h-[90%] w-20 flex items-center justify-center ${todosstate == false ? "border bg-white" : "mothing"} rounded-full`} >Pending</span>
          <span onClick={() => setodosstate(true)} className={`states h-[95%] w-20 flex items-center justify-center ${todosstate ? "border bg-white" : "nothing"} rounded-full`}>Finished</span>
        </div>
        <div className="todolist w-[80%]  flex flex-col gap-2 ">

          {todosstate ? completed.map((todo) => {

            return (
              <div className={`flex gap-2 relative justify-centre items-center rounded-lg ${todo.bgColor} ${todo.borderColor} h-10 `} key={todo.id}>


                <div className="flex h-10 ">
                  <div className="checkbox flex w-10 justify-center items-center checked ">
                    <ShieldCheck />
                    {/* <input type="checkbox" onChange={() => handlecheck(todo.id)} name="status" className="w-4 h-4 " id="checkbox" value='true'  /> */}


                  </div>
                  <div className="todo text-lg font-mono  ml-6  w-[80%] flex justify-center items-center">
                    {todo.todo}
                  </div>
                </div>
                <div onClick={() => handleEdit(todo.id)} className="deletetodo absolute right-12  "><PencilSparkles />
                </div>
                <div onClick={() => handleDelete(todo.id)} className="deletetodo absolute right-2 "><Trash2 /></div>
              </div>

            )
          }) : pending.map((todo) => {

            return (
              <div className={`flex gap-2 relative justify-centre items-center rounded-lg ${todo.bgColor} ${todo.borderColor} h-10 `} key={todo.id}>


                <div className="flex h-10 ">
                  <div className="checkbox flex w-16 justify-center items-center ">
                    <input type="checkbox" onChange={() => handlecheck(todo.id)} name="status" className="w-4 h-4 " id="checkbox" value='true' />


                  </div>
                  <div className="todo text-lg font-mono  ml-6 w-[80%] flex justify-center items-center">
                    {todo.todo}
                  </div>
                </div>
                <div onClick={() => handleEdit(todo.id)} className="deletetodo absolute right-12  "><PencilSparkles />
                </div>
                <div onClick={() => handleDelete(todo.id)} className="deletetodo absolute right-2 "><Trash2 /></div>
              </div>

            )
          })}
        </div>
      </section >
    </div >
  )
}
