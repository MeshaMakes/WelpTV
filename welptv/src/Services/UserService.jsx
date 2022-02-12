/* this context/service is repsonsible for providing the user's
state throughout the app (user info and stuff)
*/
import React, { useState, useEffect } from "react"
import UserContext from "../Utils/Contexts/UserContext"
import useStorage from "../Utils/Hooks/StorageHook"


const UserContextProvider = (props) => {
  const state = ContextState()

  useEffect(() => {
    if(state){
    }
    // eslint-disable-next-line
  }, [])

  return (
    <UserContext.Provider value={state}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
