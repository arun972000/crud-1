import Create from './components/create'
import './App.css'
import Home from './components/home'
import { Routes,Route } from 'react-router-dom'
import Edit from './components/edit'
import Navbar from './Navbar'
import UserCard from './components/usercards'

function App() {
 
  return (
  <>
  <Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/create" element ={<Create/>}/>
  <Route path="/edit/:id" element={<Edit/>}/>
  <Route path="/view/:id" element={<UserCard/>}/>
</Routes>
  </>
  )
}

export default App
