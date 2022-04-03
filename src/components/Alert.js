import React, { useEffect } from 'react'

const Alert = ({msg, removeAlert}) => {

  useEffect(() => {
    const timeout = setTimeout(()=>{
      removeAlert()
    }, 5000);
    return () => clearTimeout(timeout)
  }, [msg])

  return <p className={`alert`}>{msg}</p>
}

export default Alert