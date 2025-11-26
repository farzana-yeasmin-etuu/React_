import React from 'react'
import { useEffect } from 'react'
const nav = ({color}) => {
  useEffect(() => {
     alert("color is changed")
   
    }, [color])
  return (
    <div>
      this is a nav
    </div>
  )
}

export default nav
