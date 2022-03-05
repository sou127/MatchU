import React from 'react'

import { useDocument } from '../../hooks/useDocument'

import { useLocation } from 'react-router-dom'

// styles
import './Profile.css'

export default function Profile() {
  const location = useLocation();
  var chosenOne = location.pathname.split("/")[2]

  const  id  = chosenOne
  const { document, error } = useDocument('users', id)

  console.log(document)

  if (error) {
    return <div className="error">{error}</div>
  }
  if (!document) {
    return <div className="loading">Loading...</div>
  }


  return (
    <div className="profile-sect">
      <h2 className='user-name'>Profile of {document.displayName}</h2>
      <img width={200} src={document.photoURL} alt="user icon"></img>
      <p className='bio'>{document.bio}</p>
      <p>{document.studying}</p>
    </div>
  )
}
