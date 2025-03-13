"use client"
import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer';
import GlobalState from '@/context';

function CommonLayout({ children }) {
 
  return (
    <div>
      <GlobalState>

    
        <Navbar />
        
       {children}
       <Footer/>
       </GlobalState>
    </div>
  )
}

export default CommonLayout
