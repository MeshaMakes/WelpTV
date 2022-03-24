import React, { useEffect, useState, useRef, useContext } from 'react'
import "./AuthScreen.css"
import UserContext from "../../Utils/Contexts/UserContext"
import useSize from "../../Utils/Hooks/SizeHook"
import { ReactComponent as Logo } from "../../Icons/logo/logo.svg"
import { useNavigate } from "react-router-dom"
import Loading from "../../Components/Loading/Loading"

function AuthScreen() {
  const contextState = useContext(UserContext)
  const navigate = useNavigate()
  const sizeHook = useSize()
  const [uiState, setUiState] = useState("login")

  useEffect(() => {
    if(contextState && navigate){
      if(contextState.hasUser){
        navigate("/home")
      }
    }
    // eslint-disable-next-line
  }, [contextState])
  

  if(!contextState.hasUser){
    return (
      <div ref={sizeHook.ref} className="auth">
        <Logo />
        <InputContainer />
        <SwitchContainer state={uiState === "login" ? true : false} setState={setUiState}/>
      </div>
    )
  }

  return (
    <div ref={sizeHook.ref} className="auth">
      <Loading />
    </div>
  )
}

function InputContainer(){
  const formRef = useRef()

  const onSubmit = (e) => {

  }

  return (
    <form ref={formRef} className="inputContainer">
      <input className="input" type="email" placeholder="Email address" />
      <input className="input" type="password" placeholder="Password" />

      <div className="inputRow">
        <GuestButton />

        <div className="inputButton" onClick={onSubmit}>
          <h1>Log In</h1>
        </div>

      </div>
    </form>
  )
}

function GuestButton(){
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/home")
  }

  return (
    <div className="guestContainer" onClick={goHome}>
      <h1>Continue as a guest</h1>
    </div>
  )
}

function SwitchContainer({ state, setState }){
  if(state){ // login UI
    return (
      <div className="switchContainer">
        <h1>Don't have an account yet?</h1>
        <div className="inputButton" onClick={()=> setState("signup")}>
          <h1>Sign Up For WelpTV</h1>
        </div>
      </div>
    )
  }

  // sign up Ui
  return (
    <div className="switchContainer">
      <h1>Already have an account?</h1>
      <div className="inputButton" onClick={()=> setState("login")}>
        <h1>Log in here</h1>
      </div>
    </div>
  )
}

export default AuthScreen
