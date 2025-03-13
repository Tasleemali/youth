"use client"
import { logoutAction } from '@/action'
import { GlobalContext } from '@/context'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

function LogOut() {
    const {IsAuth ,setIsAuth} = useContext(GlobalContext)
    const router = useRouter()
async function logoutbtn() {
      const result = await logoutAction()
        if (result?.success) {
          alert('logout succesful')
          setIsAuth(false)
          router.push("service/login")
        }
}

  return (
    <div>
        {IsAuth?
 <button className= ' py-3 bg-black  rounded-md text-white w-full'  onClick={logoutbtn}>LogOut</button>:null
        }
     
    </div>
  )
}

export default LogOut