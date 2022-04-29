import React from 'react'
import image from './images/image.jpeg'

const Statement = () => {
  return (
    <div className="statement">
        <h1 className="statementTitle">Mission Statement</h1>
        <div className="statementContainer">
          <img className="statementPic" src={image} />
          <p className="statementDescription">Our mission is to allow people who were directly affected by the war to display deceased loved ones to bring awareness to this bloody conflict.</p>
        </div>
    </div>
  )
}

export default Statement