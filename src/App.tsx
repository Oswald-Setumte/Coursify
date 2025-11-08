import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './Components/Layout'
import Dashboard from './Pages/Dashboard'


function App() {
  const [user, setUser]= useState('Philips')
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <Layout title="Dashboard " user={user}>
            <Dashboard/>
        </Layout>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
