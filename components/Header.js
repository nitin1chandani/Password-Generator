import React from 'react'

const Header = () => {
  return (
    <div className="flex bg-green-500 justify-between items-center h-8 px-5 text-2xl">
        <div>
            TodoList
        </div>
        <div className="flex gap-8">
            <h4>About</h4>
            <h4>careers</h4>
            <h4>menu</h4>
            <h4>login</h4>
        </div>
    </div>
    
  )
}

export default Header