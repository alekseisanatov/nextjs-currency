import { Currency } from '@/types/types'
import CurrencyItem from './CurrencyItem'

interface TableProps {
  data: Currency[]
  columns: number
  onDelete: (id: string) => void
}

export default function Table({ data, columns, onDelete }: TableProps) {
  const chunkedData: Currency[][] = []
  for (let i = 0; i < data.length; i += columns) {
    chunkedData.push(data.slice(i, i + columns))
  }

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          {Array(columns).fill(null).map((_, index) => (
            <th key={index} className="border-b-2 p-4 text-left bg-gray-50">
              <div className="flex justify-between">
                <span>Name</span>
                <span>Balance</span>
                <span className='w-11'></span>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {chunkedData.map((row, rowIndex) => (
          <tr 
            key={rowIndex}
            className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
          >
            {row.map((currency) => (
              <td
                key={currency.id}
                className="border p-4 relative group hover:bg-gray-50 transition-colors"
              >
                <CurrencyItem 
                  currency={currency} 
                  onDelete={onDelete}
                />
              </td>
            ))}
            {Array(columns - row.length)
              .fill(null)
              .map((_, i) => (
                <td key={`empty-${i}`} className="border p-4" />
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}