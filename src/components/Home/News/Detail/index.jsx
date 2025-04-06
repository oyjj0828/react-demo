import React from 'react'
import { useParams, useSearchParams, useLocation, useNavigate } from 'react-router-dom'

export default function Detail() {
  // params传参
  // const {id} = useParams()
  // search传参
  // const [searchParams, setSearchParams] = useSearchParams()
  // const id = searchParams.get('id')
  // state传参
  const navigate = useNavigate()
  const { state } = useLocation()
  const id = state.id
  const back = ()=>{
    navigate({
      pathname:'/home/news'
    },{
      replace:false
    })
  }
  return (
    <div onClick={back} style={{cursor:'pointer'}}>detail{id}</div>
  )
}
