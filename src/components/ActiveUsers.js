import { useCollection } from '../hooks/useCollection'

import { Link } from 'react-router-dom'

// components
import Avatar from './Avatar'

// styles
import './ActiveUsers.css'

export default function ActiveUsers() {
  const { isPending, error, documents } = useCollection('users')

  return (
    <div className='grayback'>
    <h3>Active Users</h3>
    <div className="user-list">
      {isPending && <div>Loading users...</div>}
      {error && <div>{error}</div>}
      {documents && documents.map(user => (
        <div key={user.id} className="user-list-item">
          {user.online && <span className='active-user'></span>}
          {!user.online && <span className='inactive-user'></span>}
          <Link to={`/profile/${user.id}`} key={user.id}>
            <Avatar src={user.photoURL} />
            <>
              <span className='username'>{user.displayName}<br></br><span className='learningspan'>Learning: <span className='skillspan'>{user.studying}</span></span></span>
              
            </>
          </Link>
        </div>
      ))}
    </div>
    </div>
  )
}