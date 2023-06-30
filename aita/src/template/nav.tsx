import Link from "next/link"
import '../styles/header-module.css'
 
export default function Header() {
  return(
    <header className="container z-10">
      <div className="">
        <ul className="list">
          <li className="item">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="item">
            <Link href="/">
              Product
            </Link>
          </li>
          <li className="item">
            <Link href="/">
              About Us
            </Link>
          </li>
          <li className="item brown">
            <Link href="/">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}