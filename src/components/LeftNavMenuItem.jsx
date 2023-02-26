import React from 'react'

const LeftNavMenuItem = ({text, icon, className, action, theme}) => {
  return (
    <div className={` text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px]  rounded-full hover:bg-[#046ec4]/[0.6] hover:text-white ${className}`}  onClick={action} style={{color:theme==="dark"?"#fff":"#046ec4"}}>
      <span className='text-xl mr-5'>{icon}</span>
      {text}
    </div>
  )
}

export default LeftNavMenuItem
