import { useState } from 'react'

const useDialog = () => {
  const [dialogState, setDialogState] = useState(null)

  const setDialog = (component) => {
    setDialogState(
      <DialogContainer child={component} clear={clear} />
    )
  }

  const clear = () => {
    setDialogState(null)
  }

  return {
    dialog: dialogState,
    setDialog: setDialog,
  }
}

export default useDialog


function DialogContainer({ child, clear }){

  const stopPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <div onClick={clear} style={{position: "absolute", top: "0", left: "0", width: '100vw', height: '100vh', zIndex: '999', display: "flex", alignItems: "center", justifyContent: "center", background: '#00000085'}}>
      <div onClick={stopPropagation} style={{}}>
        {child}
      </div>
    </div>
  )
}
