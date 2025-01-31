interface InputProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string,
}

export default function Input({ type, value, onChange, placeholder }: InputProps) {
 return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full p-2 border rounded"
      required
    />
  )
}