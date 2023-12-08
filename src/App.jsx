import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './service/firebase'
import Header from './components/Header'
import { AuthProvider}  from './providers/AuthProvider'
import Dashboad from './components/Dashboad'

function App() {

  return (
    <>
    <AuthProvider>
    <Header />
    <Dashboad />

      <h1>Vite + React</h1>

      </AuthProvider>
    </>
  )
}

export default App
