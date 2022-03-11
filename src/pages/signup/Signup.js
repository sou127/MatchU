import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

// styles
import './Signup.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)
  const [bio, setBio] = useState('')
  const [studying, setStudying] = useState('')
  const { signup, isPending, error } = useSignup()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName, thumbnail, bio, studying)
  }

  const handleFileChange = (e) => {
    setThumbnail(null)
    
    let selected = e.target.files[0]
    // console.log(selected)

    if (!selected) {
      setThumbnailError('Please select a file')
      return
    }
    if (!selected.type.includes('image')) {
      setThumbnailError('Selected file must be an image')
      return
    }
    setThumbnailError(null)
    setThumbnail(selected)
    // console.log('thumbnail updated')
  }

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Sign Up</h2>
      <label>
        <span>Email:</span>
        <input
          required 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          required
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password}
        />
      </label>
      <label>
        <span>Username:</span>
        <input
          required
          type="text" 
          onChange={(e) => setDisplayName(e.target.value)} 
          value={displayName}
        />
      </label>
      <label>
        <span>Icon:</span>
        <input 
          required
          type="file"
          onChange={handleFileChange}
        />
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>
      <label>
        <span>About you:</span>
        <textarea
          required
          type="text" 
          onChange={(e) => setBio(e.target.value)} 
          value={bio}
        />
      </label>
      <label>
        <span>Studying:</span>
        <input
          required
          type="text" 
          onChange={(e) => setStudying(e.target.value)} 
          value={studying}
        />
      </label>
      {!isPending && <button className="btn">Sign up</button>}
      {isPending && <button className="btn" disabled>Loading...</button>}
      {error && <div className='error'>{error}</div>}
    </form>
  )
}