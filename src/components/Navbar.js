// styles & images
import './Navbar.css'
import Temple from '../assets/temple.svg'

import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'

import { Link } from 'react-router-dom'

export default function Navbar() {
  const { user, authIsReady } = useAuthContext()
  const {logout, isPending} = useLogout()
  return (
    <div className='navbar'>
      {authIsReady && (
        <ul>
            <li className='logo'>
                <img src={Temple} alt="Logo"></img>
                <span>MatchU</span>
            </li>

            {!user && (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
              </>
            )}

            { user &&  (
              <li>
                {!isPending && <button className='btn' onClick={logout}>Logout</button>}
                {isPending && <button className='btn' disabled>Logging out...</button>}
              </li>
            )}
        </ul>
      )}
    </div>
  )
}