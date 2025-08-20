import { getStockStatus } from '@/lib/stockStatus'

describe('getStockStatus', () => {
  // check all the basic defaults and edge cases for the three levels of stock
  // text that could show up on the product card so if there is a number value
  // we've got proper coverage
  it.each([
    [{ stock: 0 }, 'Out of Stock'],
    [{ stock: 1 }, 'Low Stock'],
    [{ stock: 5 }, 'Low Stock'],
    [{ stock: 6 }, 'In Stock'],
    [{ stock: 42 }, 'In Stock'],
  ] as const)('returns %s for %o', (product, expected) => {
    expect(getStockStatus(product)).toBe(expected)
  })

  // also add cases for situations where somehow, somewhere we end up with
  // undefined, null, or completely empty values in the stock number so that
  // we display 'Out of Stock' and avoid breakage to the user experience
  it('treats missing stock as Out of Stock', () => {
    expect(getStockStatus({})).toBe('Out of Stock')
  })

  it('handles undefined product safely as Out of Stock', () => {
    expect(getStockStatus(undefined)).toBe('Out of Stock')
  })

  it('handles null product safely as Out of Stock', () => {
    expect(getStockStatus(null)).toBe('Out of Stock')
  })
})
