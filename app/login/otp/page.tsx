'use client'

import OTPForm from '@/components/auth/OTPForm'

export default function OTPPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Enter OTP</h1>
        <OTPForm />
      </div>
    </div>
  )
}