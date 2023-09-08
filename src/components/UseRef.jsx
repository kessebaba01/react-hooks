import React from 'react'
import { useRef } from 'react'

function UseRef() {

    const inputRef = useRef(null)

    function onClick() {
        inputRef.current.value = ""
    }

  return (
    <div>
        <h1>Kamkam</h1>
        <input type="text" placeholder='Ex...' ref={inputRef}/>
        <button onClick={onClick}>Change Name</button>
    </div>
  )
}

export default UseRef