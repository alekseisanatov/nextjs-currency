const API_BASE = process.env.NEXT_PUBLIC_API_BASE

import { CURRENCY_MAPPING } from '@/constants/currencies'

export const fetchCurrencies = async () => {
  const response = await fetch(`${API_BASE}`)
  if (!response.ok) throw new Error('Failed to fetch currencies')
  const data = await response.json()
  
  return data.map((item: any) => ({
    ...item,
    currencySymbol: CURRENCY_MAPPING[item.id] || 'N/A'
  }))
}

export const fetchNotFound = async () => {
  const response = await fetch(`${API_BASE}/not-found`)
  if (!response.ok) throw new Error('Resource not found')
  return response.json()
}