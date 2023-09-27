import S9Navbar from '@/components/navbar/S9Navbar';
import { title } from '@/components/primitives';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { Navbar } from '@nextui-org/navbar';
import Image from 'next/image'

export default function Home() {
  return (
    <>

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full">
        <div className="max-w-3xl flex flex-col items-center justify-center">
          <h1 className={title({color: 'violet', size: 'xl'}) + ' text-center'}>Scout9</h1>
          <h1 className={title({size: 'sm'}) + ' text-center'}>API Documentation</h1>
          <Button
            as={Link}
            radius="full"
            className="w-full max-w-xs mt-24 bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]"
            variant="shadow"
            color="primary"
            size="lg"
            href={'/docs'}
          >Documentation</Button>
        </div>
      </div>
    </main>
    </>
  )
}
