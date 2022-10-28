import React from 'react'

export const Button = ({isActive, clicked}) => {
  return (
    <button onClick={clicked}>{isActive ? 'Get another user' : 'Get user'}</button>
  )
}
