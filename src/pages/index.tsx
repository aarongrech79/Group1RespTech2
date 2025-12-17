import Link from 'next/link'
import ProductCard from '../../components/ProductCard'

const products = [
  { id: 'p1', name: 'Accessible Sneakers', price: 79.99, description: 'Comfortable, wide-fit sneakers.' },
  { id: 'p2', name: 'Noise-cancelling Headphones', price: 129.99, description: 'Lightweight and comfortable.' },
  { id: 'p3', name: 'Braille Keyboard Cover', price: 29.99, description: 'High-contrast, tactile markers.' },
]

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-4">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Accessible E‑Commerce</h1>
        <p className="text-sm text-gray-600">Starter shop optimized for accessibility</p>
      </header>

      <section aria-labelledby="products-heading">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((p) => (
            <li key={p.id}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      </section>
      <footer className="mt-8 text-sm text-gray-500">Demo shop • keyboard & screen reader friendly</footer>
    </main>
  )
}
