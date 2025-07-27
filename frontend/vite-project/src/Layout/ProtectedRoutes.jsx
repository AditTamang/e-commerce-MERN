import React from 'react'

const ProtectedRoutes = ({children, condition, redirect}) => {
  return <>{condition ? children : <Navigate to={redirect}/>}</>
}

export default ProtectedRoutes