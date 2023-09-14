import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from 'components/Header/Header'
import { Suspense } from 'react'
import { Div, HeaderG } from './Lauout.style'

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
    </Div>
  )
}
