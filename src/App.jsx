import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import SiteRoutes from './SiteRoutes'
import { useNavigate } from 'react-router-dom'
function App() {

  const [user, setUser]= useState(null)
  const navigate=useNavigate()

  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem("user"))??null)
  },[])

  const handleLogin =() => {
    const user={id:1, name:"Eyüb Sabri Demir"}
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
    navigate('/')
  }
  const handleLogout=() => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <>

      <Navbar handleLogout={handleLogout} user={user}/>
      <div className=''>      
        <div className=''>
            <SiteRoutes handleLogin={handleLogin} user={user}/>
        </div>
      </div>

    </>
  )
}

export default App
