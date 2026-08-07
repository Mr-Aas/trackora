import React from 'react'
import { BadgePlus } from 'lucide-react';
import { useState, useEffect } from "react"
import todos from "../sampleData/data"






export default function Todos() {
  const [Todos, setTodos] = useState<Array<any>>([])
  const [activestate, setActivestate] = useState<string>("")

  useEffect(() => {
    async function gettodos() {
      if (Todos.length == 0) {
        await localStorage.setItem("todos", JSON.stringify(todos))
      }
      const data = await localStorage.getItem("todos")
      setTodos(JSON.parse(data))
    }
    gettodos()

  }, [])
  console.log(Todos)
  interface todoDataType {
    id: any,
    data_time: Date,
    todo: String,
    priority: String,
    isCompleted: Boolean

  }
  let priorities = [
    { label: "high", color: "bg-red-500" ,state:"deactive"},
    { label: "medium", color: "bg-yellow-500" ,state:"active"},
    { label: "low", color: "bg-green-500" ,state:"deactive"}
  ]
  function generateUUID() {
    return "xxxx-xxxx-xxxx".replace(/x/g, function (c) {
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
  const getcolorofpriority = () => {
    let color = ""
    Todos.forEach((s) => {
      if (s.priority == "high") color = "bg-red-300"
      if (s.priority == "medium") color = "bg-blue-300"
      if (s.priority == "high") color = "bg-green-300"

    })
    return color
  }
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormdata({ ...formdata, todo: event.target.value })

  }
  const handleAdd = () => {
    // setform({ ...formdata})
    console.log(formdata)
  }

  return (
    <div className="main ">
      <section className="addtodo bg-blue-200  flex flex-col justify-center items-center  h-[20vh] w-full ">
        <div className="flex justify-center flex-col h-[10vh]  items-center">
          <div className="search  flex  p-6 ">
            <div className="w-[80vw] m-0 p-0">
              <label htmlFor="addtodo" className='font-serif font-bold'>Add Todos</label>
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
              <button onClick={() => formdata.priority = prio.label} className={`selectPriority border w-12 h-6 rounded-xl text-[10px] ${prio.color}`
              }>
                {prio.label}
              </button>
            )
          })}
        </  div>
      </section >
      <section className="showTodos  bg-blue-100  w-full h-[70vh]  flex flex-col gap-2  items-center">
        <div className="todolist w-[80%]  flex flex-col gap-2 ">

          {Todos.map((todo) => {

            return (
              <div className={`flex gap-2 justify-centre items-center rounded-lg  ${getcolorofpriority()} h-[40px]  `} key={todo.id}>


                <div className="flex ">
                  <div className="checkbox flex h-full justify-center items-center ">
                    <input type="checkbox" name="status" className="w-4 h-4" id="checkbox" value={todo.isCompleted} />
                  </div>
                  <div className="todo ml-6 w-full w-[80%] flex justify-center items-center">
                    {todo.todo}
                  </div>
                </div>
              </div>

            )
          })}
        </div>
      </section>
    </div >
  )
}
