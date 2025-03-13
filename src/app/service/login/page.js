'use client';


import { useSession, signIn, signOut } from "next-auth/react"
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaGoogle } from "react-icons/fa";
import { loginAction } from "@/action";
import { GlobalContext } from "@/context";


const IntialLoginForm = {
  email:'',
  password:''
}

export default function LoginPage() {
const {setIsAuth} = useContext(GlobalContext)
const [loginFormData ,setLoginFormData] =useState(IntialLoginForm)
console.log(loginFormData)
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  async function handlelogin() {
  
 const result = await loginAction(loginFormData)
  console.log(result)
  setLoading(true);
   if(result?.success){
  
    setTimeout(() => {
      setLoading(false);
      router.push('/'); // Redirect to dashboard after signup
 setIsAuth(true)
    }, 1000);
     
   }
 // Simulate account creation process
  
   
  };

  return (
    <div className='bg-white text-black'>

    
    <div className='mx-auto max-w-screen-2xl px-5 '>

   
    <div className="flex items-center justify-center min-h-[600px] bg-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">Login</h2>
        <form action={handlelogin} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={loginFormData.email}
              onChange={(e) => setLoginFormData({...loginFormData, email:e.target.value})}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={loginFormData.password}
              onChange={(e) => setLoginFormData({ ...loginFormData ,password:e.target.value})}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-slate-900 text-white py-2 rounded hover:bg-black transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
        </p>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account? <a href="/service/register" className="text-blue-500 hover:underline">Sign up</a> <br/>
        </p>
        <div className="  text-center mt-4  ">
        <button className=" rounded-lg border-2 py-2 border-gray-300 w-full text-center mt-4  flex  justify-center items-center gap-3" onClick={() => signIn()}> <FaGoogle className="bg-gradient-to-t  from-blue-500 to-red-600 bg-clip-text text-tr"/> Sign In</button>
        </div>
        
      </div>
      
     
      

    </div>
   
    </div>
    </div>
  );
}
