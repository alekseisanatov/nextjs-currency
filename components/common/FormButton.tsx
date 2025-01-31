import { ReactNode } from "react";

interface FormButtonProps {
  loading: boolean,
  children: ReactNode;
}

const FormButton = ({ loading, children }: FormButtonProps) => {
  return (
    <button
      type="submit"
      className="w-full bg-blue-500 text-white p-2 rounded disabled:bg-gray-400"
      disabled={loading}
    >
      {children}
    </button>
  )
}

export default FormButton;