'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ErrorMessage from '../common/ErrorMessage'
import Input from '../common/Input'
import FormButton from '../common/FormButton'
import Spinner from '../common/Spinner'

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
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='' />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Password</label>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='' />
      </div>
      {error && <ErrorMessage message={error} />}
      <FormButton loading={loading}>
        {loading ? <Spinner /> : type === 'login' ? 'Login' : 'Register'}
      </FormButton>
    </form>
  )
}