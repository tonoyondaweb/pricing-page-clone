import { useState } from "react"
import Nav from "./components/Nav"
import Plans from "./components/Plans"
import PlanToggle from "./components/PlanToggle"
import AddOn from "./components/AddOn"

// Import data
import plans from "./data/plans"
import addOns from "./data/addons"

export default function App() {
  const [planToggle, setPlanToggle] = useState(false)

  function togglePlan() {
    setPlanToggle(prevState => !prevState)
  }

  const planEls = plans.map((plan, index) => <Plans key={index} data={plan} toggle={planToggle} />)
  const addOnEls = addOns.map((addOn, index) => <AddOn key={index} data={addOn} toggle={planToggle} />)

  return (
    <div className="w-screen h-screen">
      <Nav />

      <section className="mt-[82px]" aria-label="prices">
        <PlanToggle toggle={planToggle} clickHandler={togglePlan} />
        <div className="h-max flex flex-col items-center gap-10 justify-center md:flex-row md:px-5 md:gap-5 md:items-stretch">
          {planEls}
        </div>
      </section>
      <section aria-label="add-ons" className="px-5 mt-28">
        <h1 className="font-serif text-3xl text-center mb-10">Super charge your work with add-ons</h1>
        <div className="mx-auto flex flex-col gap-y-5 md:w-max">{addOnEls}</div>
      </section>
      <div className="bg-green-100/10 w-[90%] py-10 px-10 mx-auto my-40 flex flex-col items-center gap-y-5 rounded md:w-max md:flex-row md:justify-between md:gap-x-20 md:py-20 lg:gap-x-48">
        <div className="text-3xl font-serif text-center md:text-left">
          <h1>It's <span className="text-green-100">your</span> business.</h1>
          <h1>We're here to help it grow.</h1>
        </div>
        <button className="bg-green-100 text-white text-sm px-7 py-3 rounded cursor-pointer">START FREE</button>
      </div>
      <section aria-label="frequently asked questions">
        <h1 className="text-center text-green-100 text-3xl font-bold mb-5">Frequently Asked Questions</h1>
      </section>
    </div>
  )
}