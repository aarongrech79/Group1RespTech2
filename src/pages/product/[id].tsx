import { useRouter } from 'next/router'
import Link from 'next/link'

const products = {
  p1: { id: 'p1', name: 'Accessible Sneakers', price: 79.99, description: 'Comfortable, wide-fit sneakers.' },
  p2: { id: 'p2', name: 'Noise-cancelling Headphones', price: 129.99, description: 'Lightweight and comfortable.' },
  p3: { id: 'p3', name: 'Braille Keyboard Cover', price: 29.99, description: 'High-contrast, tactile markers.' },
}

export default function ProductPage() {
  const { query } = useRouter()
  const id = Array.isArray(query.id) ? query.id[0] : query.id
  const product = id ? (products as any)[id] : null

  if (!product) return (
    <main className="p-4">
      <p>Product not found.</p>
      <Link href="/">Back to products</Link>
    </main>
  )

  return (
    <main className="max-w-3xl mx-auto p-4">
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex gap-2 text-sm text-gray-600">
          <li><Link href="/">Home</Link></li>
          <li aria-current="page">{product.name}</li>
        </ol>
      </nav>

      <h1 className="text-2xl font-semibold">{product.name}</h1>
      <p className="text-lg text-green-700">${product.price}</p>
      <p className="mt-4">{product.description}</p>

      <form className="mt-6" onSubmit={(e)=>{e.preventDefault(); alert('Add to cart (demo)')}}>
        <label className="block mb-2" htmlFor="qty">Quantity</label>
        <input id="qty" name="qty" type="number" min={1} defaultValue={1} className="border p-2 rounded" />
        <button className="ml-3 px-4 py-2 bg-blue-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">Add to cart</button>
      </form>
    </main>
  )
}
