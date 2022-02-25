/* this context/service is repsonsible for providing the user's
state throughout the app (user info and stuff)
*/
import React, { useEffect, useState } from "react"
import UserContext from "../Utils/Contexts/UserContext"
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore"
import useStorage from "../Utils/Hooks/StorageHook"

function ContextState(){
  const db = getFirestore()
  const storage = useStorage()
  const [user, setUser] = useState(null)
  //id, email, password, username, attendace, watch history, search history, saved series, points

  useEffect(() => {
    if(storage){
      //setUser({name: "John"})
    }
    // eslint-disable-next-line
  }, [])
  
  
  const createAccount = async ({ email, password }) => {
    if(!email || !password){
      return {
        message: "Please complete login form before submitting"
      }
    }

    const userRef = collection(db, "welp/meta/users")
    const querySnapshot = await getDocs(query(userRef, where("email", "==", email)))
    if(!querySnapshot.empty()){
      return {
        message: "This email is already in use"
      }
    }

    try {
      const docRef = await addDoc(userRef, {
        email: email,
      })
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const loginAccount = async ({ email, password }) => {
    if(!email || !password){
      return {
        message: "Please complete login form before submitting"
      }
    }

    const userRef = collection(db, "welp/meta/users")
    const querySnapshot = await getDocs(query(userRef, where("email", "==", email)))
    if(querySnapshot.empty){
      return {
        message: "Incorrect email and/or password"
      }
    }

    if(querySnapshot.docs[0].data().password === password){

    }else{
      return {
        message: "Incorrect email and/or password"
      }
    }
  }

  const updateAccount = ({ userInfo }) => {
    
  }

  return {
    createAccount: createAccount,
    loginAccount: loginAccount,
    updateAccount: updateAccount,
    hasUser: user ? true : false,
    user: user,
  }
}


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
