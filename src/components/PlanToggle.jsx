export default function PlanToggle(props) {
    return (
        <div className="flex justify-around items-center py-10">
            <h1 className="font-serif text-3xl">{'Plans & Pricing'}</h1>
            <div className="flex items-center gap-x-5">
                <span className={`text-base ${props.toggle ?
                    "text-grey-100/50" : "text-grey"
                    }`}>MONTHLY</span>
                <div className="h-7 w-12 bg-green flex flex-col justify-center rounded-full px-1 cursor-pointer" onClick={props.clickHandler}>
                    <div className={`dot bg-white h-5 w-5 rounded-full ${props.toggle ? 'self-end' : 'self-start'}`}>
                    </div>
                </div>
                <span className={`text-base ${props.toggle ?
                    "text-grey-100" : "text-grey-100/50"
                    }`}>YEARLY</span>
            </div>
        </div>
    )
}