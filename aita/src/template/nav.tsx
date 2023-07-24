import Link from "next/link"
import '../styles/header-module.css'
 
export default function Header() {
  return(
    <header className="">
      <div className="container1">
        <ul className="list">
          <li className="m-item">
            <Link href="/#home">
              <p className="md:text-xl md:mr-5">Home</p>
            </Link>
          </li>
          <li className="m-item md:item">
            <Link href="/#product">
            <p className="md:text-xl md:mr-5">Product</p>
            </Link>
          </li>
          <li className="m-item md:item">
            <Link href="/#aboutus">
            <p className="md:text-xl md:mr-5">About Us</p>
            </Link>
          </li>
          <li className="m-item md:item brown">
            <Link href="/#contact">
            <p className="md:text-xl">Contact</p>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}