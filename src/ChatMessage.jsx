import React from 'react'
import { FaCircleUser } from 'react-icons/fa6'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center p-2 m-1 shadow-sm rounded-lg break-words'>
        <FaCircleUser size={25} />
        <span className='font-bold px-2'>{name}:</span>
        <span className=''>{message}</span>
    </div>
  )
}

export default ChatMessage;