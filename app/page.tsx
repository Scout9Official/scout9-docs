import { Link } from '@nextui-org/link';
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/docs">Go to docs</Link>
    </main>
  )
}
