import React, { useRef } from 'react'
import Btn from './Btn'

function ImperativeHandle() {
    const buttonRef = useRef(null)
  return (
    <div>
        <button onClick={() => {buttonRef.current.alterToggle()}}>Button From Parent</button>
       <Btn ref={buttonRef} />
    </div>
  )
}

export default ImperativeHandle