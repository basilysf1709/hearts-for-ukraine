import React from 'react'
import FormInput from './FormInput';

const Form = () => {
  return (
    <div className="form">
        <div className="formTitle">
            <h1>Submit request for deceased person</h1>
        </div>
        <FormInput placeholder="First Name"/>
        <FormInput placeholder="Middle Name"/>
        <FormInput placeholder="Last Name"/>
        <FormInput placeholder="Age"/>
        <FormInput placeholder="Description"/>
        <button><p>Submit</p></button>
    </div>
  )
}

export default Form