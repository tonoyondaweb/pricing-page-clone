import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false)
  function menuToggle() {
    setShowMenu(prevState => !prevState)
  }

  return (
    <nav className="bg-white flex items-center justify-between py-5 fixed top-0 w-screen">
      <h1 className="ml-5 text-green text-3xl font-bold lg:ml-11 xl:ml-36">Pricing</h1>
      <div className={
        `w-full fixed bottom-0 top-17 flex flex-col px-5 ${showMenu ? "left-0 duration-300" : "left-full duration-300"
        } md:flex md:static md:w-max md:flex-row md:grow md:justify-between lg:px-11 xl:px-40`
      } >
        <ul className="mt-10 md:mt-0 md:flex md:gap-x-5 lg:gap-x-15 md:grow md:justify-center items-center">
          <li>
            Product
            <hr className="my-5 opacity-20 md:hidden" />
          </li>
          <li>
            Template
            <hr className="my-5 opacity-20 md:hidden" />
          </li>
          <li>
            Pricing
            <hr className="my-5 opacity-20 md:hidden" />
          </li>
          <li>
            Reviews
            <hr className="my-5 opacity-20 md:hidden" />
          </li>
        </ul>
        <div className="flex gap-5 flex-col md:flex-row font-bold">
          <button className="border border-green text-green py-2 px-5 rounded">LOG IN</button>
          <button className="bg-green text-white py-2 px-5 rounded">START FREE</button>
        </div>
      </div>
      <GiHamburgerMenu className="mr-5 cursor-pointer text-3xl text-green md:hidden" onClick={menuToggle} />
    </nav>
  )
}