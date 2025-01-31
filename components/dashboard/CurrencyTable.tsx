'use client'

import { useState, useEffect } from 'react'
import { fetchCurrencies } from '@/services/api'
import Table from '../common/Table'
import Spinner from '../common/Spinner'
import ErrorMessage from '../common/ErrorMessage'
import ColumnController from './ColumnController'

export default function CurrencyTable() {
  const [currencies, setCurrencies] = useState<any[]>([])
  const [error, setError] = useState('')
  const [columns, setColumns] = useState(3)
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCurrencies()
        setCurrencies(data)
      } catch (err) {
        setError('Failed to load currencies, ' + err)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  const handleDelete = (id: string) => {
    setCurrencies(prev => prev.filter(currency => currency.id !== id))
  }

  const filteredCurrencies = currencies.filter(currency =>
    currency.currencySymbol.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) return <Spinner />

  return (
    <div className="p-4">
      <div className="flex gap-4 mb-4 items-center">
        <ColumnController 
          columns={columns} 
          onIncrement={() => setColumns(c => c + 1)}
          onDecrement={() => setColumns(c => Math.max(1, c - 1))}
        />
        <input
          type="text"
          placeholder="Search currency..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded flex-grow max-w-xs"
        />
      </div>

      {error && <ErrorMessage message={error} />}
      <Table
        data={filteredCurrencies}
        columns={columns}
        onDelete={handleDelete}
      />
      
    </div>
  )
}