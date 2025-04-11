import React,{ useRef, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import MyNavLink from '../MyNavLink'

function Demo() {
  const [demos,setDemos]=useState([1,2,3,4,5,6,7,8,9,10,11,12])
  return (
    <div>
      {
        demos.map((item,index)=>{
          return <MyNavLink to={`demo${item}`} key={index}>
            demo{item}
          </MyNavLink>
        })
      }
      <Outlet></Outlet>
    </div>
  )
}

export default Demo