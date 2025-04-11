import React from 'react'
import demo from './index.module.css'

function Demo2() {
  const [flag,setFlag] = React.useState('single')
  const singleCol = ()=>{
    setFlag('single')
  }

  const doubleCol = ()=>{
    setFlag('double')
  }

  return (
    <div className={demo.father}>
      <button onClick={singleCol} className={flag === 'single' ? demo.active : ''}>单列</button>
      <button onClick={doubleCol} className={flag === 'double' ? demo.active : ''}>双列</button>
    <div className={`${demo.container} ${flag==='single' ? demo.single : demo.double}`}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>
    </div>
  )
}

export default Demo2
