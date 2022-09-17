import { useState } from "react"
import Nav from "./components/Nav"
import Plans from "./components/Plans"
import PlanToggle from "./components/PlanToggle"
import plans from "./data/plans"

export default function App() {
  const [planToggle, setPlanToggle] = useState(false)

  function togglePlan() {
    setPlanToggle(prevState => !prevState)
  }

  const planEls = plans.map((plan, index) => <Plans key={index} data={plan} toggle={planToggle} />)

  return (
    <div className="w-screen h-screen">
      <Nav />

      <section className="mt-[82px]" aria-label="prices">
        <PlanToggle toggle={planToggle} clickHandler={togglePlan} />
        <div className="h-max flex flex-col items-center gap-10 justify-around md:flex-row md:px-5 md:gap-5 lg:px-10 xl:px-20 md:items-stretch">
          {planEls}
        </div>
      </section>
    </div>
  )
}