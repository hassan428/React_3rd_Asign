import { Btn } from "./button"
import { Heading } from "./heading"
import { Text } from "./text"


const Details_card = (props) => {
    return <>
        <div className="flex justify-around items-center  bg-gray-100">
            <img src={props.img} alt="" className="w-1/2" />
            <div className="flex-col space-y-3 xl:space-y-5 ">
                <Heading text={props.name} class="text-4xl xl:text-5xl" />
                <Heading text={props.text} class="text-2xl xl:text-3xl " />
                <Heading text={props.price} class="text-xl xl:text-2xl font-black " />
                <Heading text="Size" class="text-2xl " />
                <div className="flex justify-between text-xl font-black">
                    <Text text="S" />
                    <Text text="M" />
                    <Text text="L" />
                    <Text text="XL" />
                </div>
                <Heading text="Color" class="text-2xl " />
                <div className="flex justify-between">
                    <Text class="bg-red-500 rounded-full p-5" />
                    <Text class="bg-blue-500 rounded-full p-5" />
                    <Text class="bg-green-500 rounded-full p-5" />
                    <Text class="bg-yellow-500 rounded-full p-5" />
                </div>
                <Btn text="Add to Cart" class="xl:py-1 text-xl xl:text-2xl w-full my-1 border border-black bg-red-300" />
            </div>
        </div>
    </>
}



export { Details_card }