'use client'

import { ToastContainer as TContainer } from 'react-toastify'

export default function ToastContainer() {
  return (
    <TContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      draggable={false}
      closeOnClick
      pauseOnHover
    />
  )
}
