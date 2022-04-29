import React from 'react'

const FormInput = (props) => {
  return (
    <div className="inputField">
        {/* <label>{props.placeholder}</label> */}
        <input placeholder={props.placeholder}/>
    </div>
  )
}

export default FormInput