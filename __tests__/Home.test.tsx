import {render, screen} from '@testing-library/react'
import Home from '@/app/page'

// AAA method
it('should have Docs text', () => {
  render(<Home />) // 1. ARRANGE
  const myElement = screen.getByText('Docs') // 2. ACT
  expect(myElement).toBeInTheDocument() // 3. ASSERT
})
