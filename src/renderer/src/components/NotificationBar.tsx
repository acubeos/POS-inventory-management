import { useState } from 'react'
import { Toaster } from 'react-hot-toast';


function NotificationBar(): JSX.Element {
  return (
    <Toaster 
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            iconTheme: {
              primary: '#4ade80',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
  )
}

export default NotificationBar
