"use client"
import { useContext, } from "react";
import {  Trash, X } from "lucide-react";
import { GlobalContext } from "@/context";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Cart({setOpenCart}) {
const router = useRouter()
const {IsAuth} = useContext(GlobalContext)
  const {carts, addCart  , removeCart  ,minusCart} = useContext(GlobalContext)
  const calculateTotalPrice = () => {
    return carts.reduce((total, item) => total + item.qty * item.price, 0).toFixed(2)
  }
  return (
    <div className=" bg-black text-white max-w-4xl h-lvh mx-auto  overflow-y-scroll  ">

<div className=" mx-5 bg-black text-white  sticky top-0 py-3 px-5  flex justify-between items-center">
<h1 className="text-3xl font-bold ">Your cart</h1>
<span onClick={()=>setOpenCart(false)} className=""><X/></span>
</div>

      
      {carts.length > 0? <div>
        { carts.map((item ,index)=> (

<div key={index} className="px-5 gap-2">
 <div className="border-b pb-4 mb-4 ">
   <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center text-center sm:text-left ">
     <img src={item.mainImage} alt="Product Image" className="w-24 mx-auto sm:mx-0" />
     <div>
       <h2 className="font-bold">{item.name}</h2>
       <p>Rs.{item.price * item.qty}</p>
       {/* <p> og.Rs.{item.price }</p> */}
       <p> Size:{item?.size}</p>
     </div>
     <div className="flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-start">
       <div className="flex border px-3 py-1 items-center">
         <button onClick={() =>  {item.qty >1 ?minusCart(item) : null }}>-</button>
         <span className="px-3">{item.qty }</span>
         <button onClick={() => addCart(item)}>+</button>
       </div>
       <button onClick={()=> removeCart(item._id)} className="text-green-600">
         <Trash size={18} />
       </button>
     </div>
   </div>
 </div>
 
</div>))
}
 <div className="mt-6 mx-6 text-center sm:text-right">
   <p className="text-lg font-semibold">Estimated total: Rs.{calculateTotalPrice()}</p>
   <p className="text-gray-500 text-sm">Taxes, discounts, and shipping calculated at checkout.</p>
{IsAuth?<div><Link href="/service/checkout">  <button onClick={()=>setOpenCart(false)} className="mt-4 border-2 border-gray-300 text-white  py-2 w-full sm:w-auto">Check out</button></Link></div>  :  <div> <Link href="/service/login"> <button onClick={()=>setOpenCart(false)} className="mt-4 border-2 border-gray-300 text-white  py-2 w-full sm:w-auto">Please Login to Checkout</button></Link></div>  }  
 </div>
      </div>:
      <div className="h-[400px] grid place-items-center"> <h1 onClick={()=> { setOpenCart(false) , router.push("/clientpage/all-new-arrivals")}} className=" text-white ">Cart is empty click to vist to see product</h1></div>
      }
  
    
    </div>
  );
}

