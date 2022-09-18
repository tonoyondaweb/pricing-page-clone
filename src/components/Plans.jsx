export default function Plans(props) {
    const { name, description, price, features } = props.data

    const featurEls = features.map((feature, index) => <li key={index} className="py-2">{feature}</li>)

    return (
        <div className="w-[90%] text-grey-100 py-10 px-7 border-[0.5px] border-grey-100 shadow-[0_0_7px_0_rgba(0,0,0,0.3)] flex flex-col rounded md:w-max">
            <h2 className="text-xl text-grey-100 font-bold">{name}</h2>
            <p className="h-[48px] text-xs mb-5">{description}</p>
            <em className="not-italic text-lg">
                <sup className="text-lg">$</sup>
                <span className="text-5xl font-bold mr-5">{props.toggle ? price.y : price.m}</span>
                {props.toggle? "/YEAR" : "/MONTH"}
            </em>
            <hr className="my-10 border-[1.2px] border-green-100 rounded" />
            <ul className="features">
                {featurEls}
            </ul>
            <div className="flex justify-center grow mt-10">
                <button className="self-end bg-green-100 text-white font-bold py-2 px-5 rounded">START FREE</button>
            </div>
        </div>
    )
}