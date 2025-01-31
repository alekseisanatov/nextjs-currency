import { render, screen, fireEvent } from '@testing-library/react'
import CurrencyTable from '../components/dashboard/CurrencyTable'

jest.mock('../services/api', () => ({
  fetchCurrencies: jest.fn().mockResolvedValue([
    { id: '1', currencySymbol: 'USD', amount: 100 },
    { id: '2', currencySymbol: 'EUR', amount: 200 },
  ]),
  fetchNotFound: jest.fn().mockRejectedValue(new Error('Not found')),
}))

describe('CurrencyTable', () => {
  it('renders and interacts correctly', async () => {
    render(<CurrencyTable />)
    
    // Test column controls
    fireEvent.click(await screen.findByText('-'))
    fireEvent.click(await screen.findByText('+'))
    
    // Test search
    const searchInput = screen.getByPlaceholderText('Search by symbol...')
    fireEvent.change(searchInput, { target: { value: 'USD' } })
    
    // Test delete
    fireEvent.click(screen.getAllByText('Delete')[0])
  })
})