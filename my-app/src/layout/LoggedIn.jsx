import React from 'react'
import { Outlet } from 'react-router-dom'

export default function LoggedIn() {
  return (
    <div>
        <Outlet></Outlet>
    </div>
  )
}
