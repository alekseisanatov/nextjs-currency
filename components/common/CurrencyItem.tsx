import { Currency } from '@/types/types'

interface CurrencyItemProps {
  currency: Currency
  onDelete: (id: string) => void
}

export default function CurrencyItem({ currency, onDelete }: CurrencyItemProps) {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="font-bold text-gray-800">{currency.currencySymbol}</div>
      <div className="text-gray-600">{currency.amount}</div>
      <button
        onClick={() => onDelete(currency.id)}
        className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition-opacity"
      >
        Delete
      </button>
    </div>
  )
}