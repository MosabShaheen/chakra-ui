import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from '@/components/Layout'
import Header from '@/components/header'
import Pricing from '@/components/pricing'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header />
    <Pricing />
    </>
  )
}