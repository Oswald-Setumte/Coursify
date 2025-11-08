import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './Components/Layout'
import Dashboard from './Pages/Dashboard'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <Layout title="Dashboard">
            <Dashboard/>
        </Layout>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
