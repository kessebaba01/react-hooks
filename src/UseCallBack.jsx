import React, { useCallback, useState } from 'react'
import CallbackChild from './CallbackChild'

function UseCallBack() {
    const [toggle, setToggle] = useState(false)
    const [data, setData] = useState("Yo, Please Sub To My Channel!!! ")

    const returnComment = useCallback(
        (name) => {
            return data + name
        },
        [data]
    )

  return (
    <div>
        <CallbackChild returnComment={returnComment} />

        <button onClick={() => {
        setToggle(!toggle)
      }}>{" "}Toggle</button>
      {toggle && <h1>Toggle</h1>}
    </div>
  )
}

export default UseCallBack