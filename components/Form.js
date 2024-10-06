import React, {useState} from "react";
import Card from "./Card";

const Form = () => {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const[task, setTask] = useState([])


    const submitHandler = (e)=>{
        e.preventDefault()
        if(title && desc){
            setTask([...task, {title, desc}])
            setTitle("")
            setDesc("")
        }
    }

    const titleHandler = (e)=>{
        setTitle(e.target.value)
    }

    const descriptionHandler = (e)=>{
        setDesc(e.target.value)
    }

  return (
  <>
    <form onSubmit={submitHandler}>
      <input placeholder="Enter title here" 
        value={title}
        onChange={titleHandler}
        className="border-zinc-800 border-4 m-8 px-2"
      />
      <input placeholder="Enter Description"
      className="border-zinc-800 border-4 m-8 px-2 w-1/3"
      value={desc}
      onChange={descriptionHandler}
      />
      <button className="bg-black text-white rounded px-3 text-center">Add task</button>
    </form>

    <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        {
            task.map((taskItem, i)=>{
                return <Card key={i} title={taskItem.title} desc={taskItem.desc}/>
            })
        }
    </div>
    </>
  );
};

export default Form;
