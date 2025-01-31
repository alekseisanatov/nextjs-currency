'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Spinner from '../common/Spinner'

export default function OTPForm() {
  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Mock OTP verification
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    router.push('/dashboard')
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <div className="mb-4">
        <label className="block mb-2">Enter OTP</label>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded disabled:bg-gray-400"
        disabled={loading}
      >
        {loading ? <Spinner /> : 'Verify OTP'}
      </button>
    </form>
  )
}