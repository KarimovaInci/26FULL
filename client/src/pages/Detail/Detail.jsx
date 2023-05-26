import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../layout/Header/Header'

const Detail = () => {
  const {id}=useParams()
  const[item,setItem]=useState({})
  useEffect(()=>{
    axios.get(`http://localhost:8080/drimo/${id}`).then(res=>{
      setItem(res.data)
    })
  })
  return (
   <>
     <Header/>
     <p>{item.title}</p>
   </>
  )
}

export default Detail