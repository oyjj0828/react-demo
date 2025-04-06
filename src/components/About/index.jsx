import React from 'react'
import { useParams } from 'react-router-dom'

export default function About(props) {
    console.log(useParams())
    return (
        <div>About</div>
    ) 
}
