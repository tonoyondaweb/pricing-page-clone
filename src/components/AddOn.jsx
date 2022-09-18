export default function AddOns(props) {
    const { name, price, description } = props.data

    return (
        <div className="w-full px-5 py-5 flex flex-col justify-between shadow-[0_0_7px_1px_rgba(0,0,0,0.3)] rounded md:flex-row-reverse md:gap-x-5">
            <div>
                <h2 className="text-xl font-bold">{!price ? "Free" :
                    !props.toggle ?
                        `$${price.m}` : `$${price.y}`
                }</h2>
                <p className="text-xs">{!props.toggle ? "/MONTH" : "/YEARLY"}</p>
            </div>
            <div>
                <h6 className="font-bold text-lg">{name}</h6>
                <p className="text-xs">{description}</p>
            </div>
        </div>
    )
}