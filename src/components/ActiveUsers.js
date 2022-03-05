import { useCollection } from '../hooks/useCollection'

import { Link } from 'react-router-dom'

// components
import Avatar from './Avatar'

// styles
import './ActiveUsers.css'

export default function ActiveUsers() {
  const { isPending, error, documents } = useCollection('users')

  return (
    <div className="user-list">
      <h2>All Users</h2>
      {isPending && <div>Loading users...</div>}
      {error && <div>{error}</div>}
      {documents && documents.map(user => (
        <div key={user.id} className="user-list-item">
          {user.online && <span className='active-user'></span>}
          <Link to={`/profile/${user.id}`} key={user.id}>
            <span>{user.displayName}</span>
          </Link>
            <Avatar src={user.photoURL} />
        </div>
      ))}
    </div>
  )
}