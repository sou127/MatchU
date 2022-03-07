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

  // console.log(document)

  if (error) {
    return <div className="error">{error}</div>
  }
  if (!document) {
    return <div className="loading">Loading...</div>
  }


  return (
    <div className="profile-section">
      <h2 className="page-title">Profile</h2>
      <div className='user-profile'>
      <div className='user-info inline-block-child'>
          <h2 className='user-name'>{document.displayName}</h2>
          <span className='sec-title'>Bio</span>
          <p className='bio'>{document.bio}</p>
          <span className='sec-title'>Studying</span>
          <p>{document.studying}</p>
        </div>
        <div className='user-icon inline-block-child'>
          <img width={200} src={document.photoURL} alt="user icon"></img>
        </div>
      </div>
    </div>
  )
}
