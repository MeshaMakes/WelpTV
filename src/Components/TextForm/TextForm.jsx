import React from 'react'
import './TextForm.css'

function TextForm({ formRef, onSubmitted, style, textFields, children }) {
  /* textFields should look like:
    [
      {
        id: unique string
        type: email | password | or any of the others Input Field Types
        placeholder: string
      }
    ]
  */

  const onSubmit = (e) => {
    e.preventDefault()
    if(formRef){
      onSubmitted(e)
    }else{
      const valueMap = (elements, callback) => {
        if(elements.length === 1){
          return callback(elements[0])
        }

        const values = []
        for(let i = 0; i < elements.length; i++){
          values.push(callback(elements[i]))
        }
        return values
      }
      const data = valueMap(e.target.elements, (i) => {
        return i.value
      })

      onSubmitted(data)
    }
  }

  return (
    <form ref={formRef} className="inputContainer" onSubmit={onSubmit} style={style}>

      {textFields && textFields.map((field) => (
        <input id={field.id} className="input" type={field.type} placeholder={field.placeholder} />
      ))}

      {children}

    </form>
  )
}

export default TextForm
