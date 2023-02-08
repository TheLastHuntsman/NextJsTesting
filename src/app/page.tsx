import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from './components/navbar'
//import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={"bg-slate-600"}>
      <h1 className={"text-3xl font-bold underline"} >Welcome G</h1>
      <div className="container-fluid text-center">
      <h1>Welcome</h1>
      <h4> Hello and welcome to this page, I know not how you've found this place but enjoy my first website. Have a look around, a few bits are still broken and being updated. </h4>
    </div>
    <div className="grid grid-cols-2 justify-center text-center">
      <div id="leftPage">
        <h1>hi</h1>
        <p>Name: Jordan Gooding-McGovern</p>
        <p>Role: Junior Software Engineer</p>
        <p>Email: Jordangm19</p>

      </div>
      <div id="rightPage">
        <h1>Bye</h1>

      </div>

    </div>
    

    </main>
  )
}
