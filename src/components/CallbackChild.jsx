import React, { useEffect } from 'react'

function CallbackChild({returnComment}) {
    useEffect(() => {
        console.log("Function Was Called");
    }, [returnComment])
  return (
    <div>{returnComment("Kenshi")}</div>
  )
}

export default CallbackChild