import { Btn } from "./button"
import { Text } from "./text"


const Card = (props) => {
    return <>
        <div className={`${props.class} `} onClick={props.send_data}>
            <img src={props.src} width={props.width} className="cursor-pointer rounded-3xl border border-black" alt="" />
            <Text text={props.card_name} class={`${props.name_class} mt-3`} />
            <Text text={props.card_text} class={`${props.text_class}`} />
            <Text text={props.price} class={`${props.price_class}`} />
            <Btn text="Add to Cart" class="px-3 my-1 border border-black bg-red-300" />

        </div>
    </>
}

export { Card }