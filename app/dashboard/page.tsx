'use client'

import CurrencyTable from '@/components/dashboard/CurrencyTable'
import AdditionalTable from '@/components/dashboard/AdditionalTable'

export default function DashboardPage() {

  return (
    <div className="container mx-auto p-4">
      <h1>Balances</h1>
      <CurrencyTable />
      <h1>Balances</h1>
      <AdditionalTable />
    </div>
  )
}