import { Button, Card, H1, P } from '@/components'
import HeroSection from '@/components/layout/landing/hero'
import TrustedSection from '@/components/layout/landing/trusted'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <div
      className={'bg-gradient-to-br from-white to-50% to-primary-50'}
      >
        <HeroSection />
      </div>

      <section
      className={'w-full flex items-center justify-center py-12'}
      >
         <TrustedSection />
      </section>
       
    </main>
  )
}
