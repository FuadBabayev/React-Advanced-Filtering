import React from 'react'

const Buttons = ({onClickHandler, value, title}) => {
  return (
    <div>
      <button onClick={onClickHandler} value={value} className="buttons">{title}</button>
    </div>
  )
}

export default Buttons
