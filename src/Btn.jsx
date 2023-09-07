import React, { forwardRef, useImperativeHandle, useState } from 'react'
import UseRef from './UseRef'


const Btn = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false)

    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggle(!toggle)
        }
    }))
  return (
    <>
    <button>
        Button From Child
    </button>
    {toggle && <span>Toggle</span>}
    </>
    
  )
})


export default Btn