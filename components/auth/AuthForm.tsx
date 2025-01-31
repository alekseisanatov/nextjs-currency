'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Spinner from '../common/Spinner'
import ErrorMessage from '../common/ErrorMessage'

export default function AuthForm({ type }: { type: 'login' | 'register' }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    if (email === 'incorrect@email.com') {
      setError('Invalid email address')
      setLoading(false)
      return
    }
    
    if (password === 'incorrect-password') {
      setError('Invalid password')
      setLoading(false)
      return
    }

    // If login, proceed to OTP
    if (type === 'login') {
      router.push('/login/otp')
    } else {
      // Handle registration
      router.push('/dashboard')
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      {error && <ErrorMessage message={error} />}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded disabled:bg-gray-400"
        disabled={loading}
      >
        {loading ? <Spinner /> : type === 'login' ? 'Login' : 'Register'}
      </button>
    </form>
  )
}