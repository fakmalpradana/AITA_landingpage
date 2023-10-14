import Link from "next/link"
import '../styles/header-module.css'
 
export default function Header() {
  return(
    <header className="">
      <div className="container1">
        <ul className="list">
          <li className="m-item">
            <Link href="/#home">
              {/* <p className="md:text-xl md:mr-5">Home</p> */}
              <button className="hover:bg-zinc-700 text-xl font-semibold py-2 px-4 rounded-full">Home</button>
            </Link>
          </li>
          <li className="m-item md:item">
            <Link href="/#product">
            <button className="hover:bg-zinc-700 text-xl font-semibold py-2 px-4 rounded-full">Product</button>
            </Link>
          </li>
          <li className="m-item md:item">
            <Link href="/#aboutus">
            <button className="hover:bg-zinc-700 text-xl font-semibold py-2 px-4 rounded-full">About Us</button>
            </Link>
          </li>
          <li className="m-item md:item brown">
            <Link href="/#contact">
            <button className="hover:bg-zinc-700 text-xl font-semibold py-2 px-4 rounded-full">Contact</button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}