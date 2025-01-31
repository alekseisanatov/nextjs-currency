'use client'

import ControllerButton from "../common/ControllerButton"

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
      <ControllerButton symbol="-" adjustColumns={onDecrement} />
      <span className="font-medium">Columns:</span>
      <span className="font-medium">{columns}</span>
      <ControllerButton symbol="+" adjustColumns={onIncrement} />
    </div>
  )
}