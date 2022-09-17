export default function Plans(props) {
    const { name, description, price, features } = props.data

    const featurEls = features.map((feature, index) => <li key={index} className="py-2">{feature}</li>)

    return (
        <div className="w-[90%] text-grey-100 py-10 px-7 border-[0.5px] border-grey-100 shadow-[0_0_7px_0_rgba(0,0,0,0.3)] rounded md:w-max">
            <h2 className="text-xl text-grey-100 font-bold">{name}</h2>
            <p className="text-xs mb-5">{description}</p>
            <em className="not-italic text-lg">
                <sup className="text-lg">$</sup>
                <span className="text-5xl font-bold mr-5">{props.toggle ? price.y : price.m}</span>
                {props.toggle? "/YEAR" : "/MONTH"}
            </em>
            <hr className="my-10 border-[1.2px] border-green rounded" />
            <ul className="features">
                {featurEls}
            </ul>
        </div>
    )
}