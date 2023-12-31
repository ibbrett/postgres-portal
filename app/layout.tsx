import './globals.css'
import type {Metadata} from 'next'
// import {Inter} from 'next/font/google'
// import {Rubik} from 'next/font/google'
// import {Phudu as PrimaryFont} from 'next/font/google'
import {Roboto_Serif as PrimaryFont} from 'next/font/google'

// const inter = Inter({subsets: ['latin']})
// const rubik = Rubik({subsets: ['latin']})
const inter = PrimaryFont({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Postgres Portal',
  description: 'Generated by create next app',
}

// bg-portal-dark text-portal-light

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white text-black container mx-auto py-10`}
      >
        {children}
      </body>
    </html>
  )
}
