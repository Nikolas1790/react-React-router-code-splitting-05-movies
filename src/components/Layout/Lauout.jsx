import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from 'components/Header/Header'
import { Suspense } from 'react'
import { Div, HeaderG } from './Lauout.style'

import { ToastContainer} from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';

export const Lauout = () => {
  return (
    <Div>      
      <HeaderG>
        <Header/>
      </HeaderG>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer autoClose={3000}/>
    </Div>
  )
}
