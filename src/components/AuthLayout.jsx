import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        if(authentication && authStatus !== authentication){
            navigate('/login')
        } else if(!authentication && authStatus !== authentication) {
            navigate('/')
        }
        setLoading(false)
    }, [navigate, authStatus, authentication])
    
    return loading ? <h1>Loading...</h1> : <>{children}</>
}