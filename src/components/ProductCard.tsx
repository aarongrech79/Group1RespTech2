import Link from 'next/link'

export default function ProductCard({ product }: { product: { id: string; name: string; price: number; description?: string } }) {
  return (
    <article className="border rounded p-4 focus-within:ring-2 focus-within:ring-blue-400" aria-labelledby={`title-${product.id}`}>
      <h3 id={`title-${product.id}`} className="text-lg font-medium">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="mt-2 font-semibold">${product.price}</p>
      <div className="mt-4">
        <Link href={`/product/${product.id}`} aria-label={`View details for ${product.name}`} className="inline-block px-3 py-2 bg-blue-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400">View</Link>
      </div>
    </article>
  )
}
