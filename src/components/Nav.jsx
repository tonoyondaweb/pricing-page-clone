import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false)
  function menuToggle() {
    setShowMenu(prevState => !prevState)
  }

  return (
    <nav className="bg-white flex items-center justify-between py-5 fixed top-0 w-screen">
      <h1 className="ml-7 text-green text-3xl font-bold lg:ml-11 xl:ml-20">bonsai</h1>
      <div className={
        `w-full bg-white fixed bottom-0 top-17 flex flex-col px-5 mr-7 ${showMenu ? "left-0 duration-300" : "left-full duration-300"
        } md:duration-0 md:flex md:static md:w-max md:flex-row md:grow md:justify-between lg:mr-11 xl:mr-20`
      } >
        <ul className="flex flex-col gap-y-5 mt-10 md:flex-row md:mt-0 md:gap-y-0 md:gap-x-5 lg:gap-x-15 md:grow md:justify-center md:items-center">
          <li>
            Product
            <hr className="mt-5 opacity-20 md:hidden" />
          </li>
          <li>
            Template
            <hr className="mt-5 opacity-20 md:hidden" />
          </li>
          <li>
            Pricing
            <hr className="mt-5 opacity-20 md:hidden" />
          </li>
          <li>
            Reviews
            <hr className="mt-5 opacity-20 md:hidden" />
          </li>
        </ul>
        <div className="flex gap-5 flex-col md:flex-row font-bold">
          <button className="border border-green text-green py-2 px-5 rounded">LOG IN</button>
          <button className="bg-green text-white py-2 px-5 rounded">START FREE</button>
        </div>
      </div>
      <GiHamburgerMenu className="mr-12 cursor-pointer text-3xl text-green md:hidden" onClick={menuToggle} />
    </nav>
  )
}