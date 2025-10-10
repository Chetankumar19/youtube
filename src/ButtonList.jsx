import React from 'react'
import Button from './Button';

const list = ["All","Music","Songs"]

const ButtonList = () => {
  return (
    <div className='flex'>
      {
        list.map((index)=> (
          <Button name={index}/>
        ))
      }
    </div>
  )
}

export default ButtonList;