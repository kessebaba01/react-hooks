import React, { useEffect, useLayoutEffect, useRef } from 'react'

function UseLayoutEffect() {
const divRef = useRef(null)

useLayoutEffect(() => {
    console.log(divRef.current.value);
}, [])

    useEffect(() => {
        divRef.current.value = "Holaaa..."
    }, [])


  return (
    <div>
        <input type="text" ref={divRef} value="Pedro" style={{width: 400, height: 200}} />
    </div>
  )
}

export default UseLayoutEffect