// allow the stock amount to be a number (which is assumed most likely), but
// also have the defensive measures of catching if it's undefined or null on accident
export type ProductStockAmount = { stock?: number } | undefined | null

// we only ever want to return the results of "out of stock", "low stock" , or "in stock"
// so we set those as the allowed values we can use when utilizing the function
export function getStockStatus(product: ProductStockAmount): 'Out of Stock' | 'Low Stock' | 'In Stock' {
  // make sure we don't break of something is undefined or null, we'd rather
  // default down to 'Out of Stock' just to be safe (at least that's what I'm guessing)
  const stock = product?.stock ?? 0
    if (stock === 0) return 'Out of Stock'
    if (stock <= 5) return 'Low Stock'
  return 'In Stock'
}
