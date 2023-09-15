import Link from 'next/link'
export default function NotFound() {
  return (
    <main className="text-center">
      <h1 className="text-3xl">Page requested not found</h1>
      <Link href="/">
        <button>Home Page</button>
      </Link>
    </main>
  )
}
