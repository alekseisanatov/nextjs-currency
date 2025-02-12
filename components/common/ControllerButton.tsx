interface ControllerButtonProps {
  symbol: string,
  adjustColumns: () => void;
}

export default function ControllerButton({ symbol, adjustColumns }: ControllerButtonProps) {
  return (
    <button
        onClick={adjustColumns}
        className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
        aria-label="Increase columns"
      >
        {symbol}
      </button>
  )
}
