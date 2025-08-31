import { useState, useEffect } from 'react'
import { Header, Footer } from './components'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getAccount()
      .then((userdata) => {
        if (userdata) {
          dispatch(login(userdata))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-col content-between bg-white'>
      <div className='w-full block'>
        <Header />
        <main className=' flex-grow'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
