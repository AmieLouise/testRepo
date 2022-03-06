import Toggle from 'react-toggle'
import React, { useState } from 'react'
import "react-toggle/style.css"

  const Filters = ({ onChangeFunc }) => {
    const [toggleIsChecked, setToggleIsChecked] = useState(false)

  const allOnChangeFunc = (checkedValue) => {
    onChangeFunc(checkedValue)
    setToggleIsChecked(!toggleIsChecked)
  }

    return (
      <div className='row h-centre'> 
        <div className='col v-center filter-tgl'>
          <label>
            Show only in stock products: 
          </label>
          <Toggle
            defaultChecked={toggleIsChecked}
            className='toggle'
            onChange={event => allOnChangeFunc(event.target.checked)} 
          />
        </div>
      </div>
  )
}
export default Filters



