import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()
  return (
    <div className='p-8 bg-emerald-400 text-gray-900 text-3xl'>
      User:{userid}
    </div>
  )
}

export default User
