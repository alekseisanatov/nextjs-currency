'use client'

interface ColumnControllerProps {
  columns: number
  onIncrement: () => void
  onDecrement: () => void
}

export default function ColumnController({
  columns,
  onIncrement,
  onDecrement,
}: ColumnControllerProps) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={onDecrement}
        className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
        aria-label="Decrease columns"
      >
        -
      </button>
      <span className="font-medium">Columns: {columns}</span>
      <button
        onClick={onIncrement}
        className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
        aria-label="Increase columns"
      >
        +
      </button>
    </div>
  )
}