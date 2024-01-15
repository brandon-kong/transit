import type { Metadata } from 'next'
import { Montserrat, Poppins, DM_Serif_Display, DM_Sans, Hind, Libre_Baskerville } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components'

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-montserrat'
})

const libre_baskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-libre_baskerville'
})

const hind = Hind({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-hind'
})

const dm_serif_display = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif-display'
})

const dm_sans = DM_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  subsets: ['latin'],
  variable: '--font-dm-sans'
})

const poppins = Poppins({
  weight: ["100", '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Home | Transit',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dm_sans.variable} ${dm_serif_display.variable} ${montserrat.variable} ${hind.variable} ${libre_baskerville.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
