// styles & images
import './Navbar.css'

import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'

import { Link } from 'react-router-dom'

// import Logo from './../assets/logo.png'

export default function Navbar() {
  const { user, authIsReady } = useAuthContext()
  const {logout, isPending} = useLogout()
  return (
    <div className='navbar'>
      {authIsReady && (
        <ul>
            <li className='logo'>
                {/* <img src={Logo} alt="MatchU Logo" /> */}
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