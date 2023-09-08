import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import LoginComponent from '../component/LoginComponent'
import { auth } from '../firebaseConfig'
import { useNavigate } from 'react-router-dom'
import Loader from '../component/common/loader'
function Login() {
  const [loading,setLoading]=useState(true)
  const navigate=useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth,(res)=>{
      if (res?.accessToken){
        navigate("/home")
      }else{
        setLoading(false)
      }
      
    })
  },[])
  return loading? <Loader/>:<LoginComponent/>
  }

export default Login
