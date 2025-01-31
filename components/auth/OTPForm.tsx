'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Spinner from '../common/Spinner'
import Input from '../common/Input'
import FormButton from '../common/FormButton'

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
        <Input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder='' />
      </div>
      <FormButton loading={loading}>
        {loading ? <Spinner /> : 'Verify OTP'}
      </FormButton>
    </form>
  )
}