import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Exp = () => {
    const [data,setdata]=useState("")

    const use=async()=>{
        const res= await axios.get("/message/u")
        console.log("messgae")
        console.log(res)
    }
    useEffect(()=>{
        use()
    })
  return (
    <div>Exp</div>
  )
}

export default Exp