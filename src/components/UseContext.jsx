import React, { useState, createContext } from 'react'
import UseContextLogin from './UseContextLogin'
import UseContextUser from './UseContextUser'

export const AppContext = createContext(null)

function UseContext() {
    const [username, setUsername] = useState("")
  return (
    <AppContext.Provider value={{username, setUsername}}>
        <UseContextLogin />
        <UseContextUser />
        {/* <UseContextLogin setUsername={setUsername}/>
        <UseContextUser username={username}/> */}
    </AppContext.Provider>
  )
}

export default UseContext