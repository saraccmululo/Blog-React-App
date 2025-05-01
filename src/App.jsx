import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import { Routes, Route } from 'react-router-dom'
import PostProvider from './contexts/PostContext'
import './App.css'

function App() {
  

  return (
    <div style={{height: "100vh"}}>
      <PostProvider>
     <NavBar /> 
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create-post" element={<CreatePost/>}/>
      <Route path="/edit-post/:id" element={<EditPost/>}/>
     </Routes>
     </PostProvider>
    </div>
    
  )
}

export default App
