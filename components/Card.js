import React from 'react'

const Card = (props) => {
  return (
    <div className="bg-black text-white border-2 border-zinc-800 justify-center items-center m-4">
        <div className="text-xl">
       title: {props.title}
        </div>
        <div>
        description: {props.desc}
        </div>
    </div>
  )
}

export default Card