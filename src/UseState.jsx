import React, { useState } from 'react'

function UseState() {
    const [counter, setCounter] = useState(0)
    const [nameInput, setNameInput] = useState("Fullname")

    function btnIncrement() {
        setCounter(prevCounter => prevCounter + 1)
    }
    function btnDecrement() {
        setCounter(prevCounter => prevCounter - 1)
    }

    function updateName(event) {
        setNameInput(event.target.value)
    }
  return (
    <div>
        <br /><br />
        <button onClick={btnDecrement}>Decrease Counter</button><br /><br />
        {counter}<br /><br />
        <button onClick={btnIncrement}>Increase Counter</button><br /><br />
        <input type="text" placeholder='Enter Your Name' onChange={updateName} /><br />
        {nameInput}
    </div>
  )
}

export default UseState