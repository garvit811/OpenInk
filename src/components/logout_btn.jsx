import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../store/authSlice'
import authService from '../appwrite/auth'

function Logout_btn() {
    const dispatch = useDispatch()
    const handleLogout = () => {
        authService.logout()
            .then(() => {
                dispatch(logout())
            })
            .catch((error) => {
                console.log("Logout failed:", error)
            })
    }
  return (
    <button 
        className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-2xl hover:bg-red-700"
        onClick={handleLogout}
    >
        Logout
    </button>
  )
}

export default Logout_btn