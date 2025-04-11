import React,{useRef,useEffect} from 'react'
import demo1 from './index.module.css'

function Demo1() {
  const father = useRef(null)
  useEffect(()=>{
    const children = father.current.children
    Array.from(children).forEach((item,index)=>{
      item.style.transformOrigin='50% 100%'
      const deg = index<=5 ? 10*(index-6) : 10*(index-5)
      item.style.transform=`rotate(${deg}deg)`
      item.style.backgroundColor=`hsl(${index*10},100%,50%)`
    })
  },[])
  return (
    <div ref={father} className={demo1.father}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
    </div>
  )
}

export default Demo1