import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from './components/navbar'
//import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={"bg-slate-600"}>
      <h1 className={"text-3xl font-bold underline"} >Welcome G</h1>

    </main>
  )
}
