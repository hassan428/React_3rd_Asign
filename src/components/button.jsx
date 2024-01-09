const Btn = (props) => {
    return <button type="button" className={`${props.class} font-black hover:bg-red-700 hover:text-white rounded-full hover:border-black`}>{props.text}</button>
}

export { Btn }