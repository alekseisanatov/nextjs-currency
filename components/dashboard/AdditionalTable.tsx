import { useState, useEffect } from "react"
import { fetchNotFound } from "@/services/api"
import ErrorMessage from "../common/ErrorMessage"
import Spinner from "../common/Spinner"

export default function AdditionalTable() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchNotFound();
      } catch (err) {
        setLoading(false);
        setError('Failed to load additional data: Resource not found, ' + err);
      }

    }
    
    loadData()
  }, [])

  if (loading) return <Spinner />

  return <ErrorMessage message={error} />
}