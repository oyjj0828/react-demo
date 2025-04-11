import React, { useState }  from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function getData(){
    axios.get('http://localhost:3000/api/data').then(res=>{
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}
export default function About(props) {
    const [value,setValue] = useState('')
    const handleChange = (e) => {
        console.log(e.target.value)
        setValue(e.target.value)
    }   

    return (
        <div>
            <button onClick={getData}>请求</button>
            <input defaultValue="12345" />
            <input value={value} onChange={handleChange} />
        </div>
    ) 
}
