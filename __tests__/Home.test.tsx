import {render, screen} from '@testing-library/react'
import Home from '@/app/page'

type UrlProps = {
  id: number
  url: string
}

// const UrlPropsArray: UrlProps[] = []
type UrlPropsArray = UrlProps[]

function filterByTerm(inputArr: UrlPropsArray, searchTerm: string) {
  const regex = new RegExp(searchTerm, 'i')
  return inputArr.filter(function (arrayElement: UrlProps) {
    return arrayElement.url.match(regex)
  })
}

describe('Test home page', () => {
  // AAA method
  it('should have "Postgres Portal" title', () => {
    render(<Home />) // 1. ARRANGE
    const myElement = screen.getByText('Postgres Portal') // 2. ACT
    expect(myElement).toBeInTheDocument() // 3. ASSERT
  })
})

describe('Filter function', () => {
  test('it should filter by a search term (link)', () => {
    const input = [
      {id: 1, url: 'https://www.url1.dev'},
      {id: 2, url: 'https://www.url2.dev'},
      {id: 3, url: 'https://www.link3.dev'},
    ]

    const output = [{id: 3, url: 'https://www.link3.dev'}]

    expect(filterByTerm(input, 'link')).toEqual(output)
    expect(filterByTerm(input, 'LINK')).toEqual(output)
  })
})
