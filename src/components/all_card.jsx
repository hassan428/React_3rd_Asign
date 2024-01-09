import { Card } from "./card";
import card_img1 from "../assets/img/product_1.jpg";
import card_img2 from "../assets/img/product_2.jpg";
import card_img3 from "../assets/img/product_3.jpg";
import card_img4 from "../assets/img/product_4.jpg";
import card_img5 from "../assets/img/product_5.jpg";
import card_img6 from "../assets/img/product_6.jpg";
import card_img7 from "../assets/img/product_7.jpg";
import card_img8 from "../assets/img/product_8.jpg";



let card_arr = [
    {
        img: card_img1,
        name: "Antic",
        text: "Vitra Design Chair",
        price: "$250.00"
    },
    {
        img: card_img2,
        name: "Round",
        text: "Screw Chair Golden",
        price: `$220.00`
    },
    {
        img: card_img3,
        name: "Side Chair",
        text: "Spin Bar Stool",
        price: "$280.00"
    },
    {
        img: card_img4,
        name: "Butterfly",
        text: "The Flow Stool",
        price: "$320.00"
    }
]


let card_arr_2 = [
    ...card_arr,
    {
        img: card_img5,
        name: "Clap",
        text: "Armchair Chair Lounge",
        price: "$290.00"
    },
    {
        img: card_img6,
        name: "3D Models",
        text: "Los Angles Chair",
        price: `$280.00`
    },
    {
        img: card_img7,
        name: "Arm Chair",
        text: "Hug Armchair Sofa ",
        price: "$310.00"
    },
    {
        img: card_img8,
        name: "Chair",
        text: "Golden Easy Spot Chair",
        price: "$300.00"
    }
]

const All_card = (props) => {
    return <div className="container m-auto my-12 grid grid-cols-2  md:grid-cols-4  xl:text-2xl" >
            {card_arr.map((obj, index) => {
                const { img, name, text, price } = obj
                return <Card src={img} key={index} send_data={() => props.get_data(obj)} width="100%" class="mx-2 mt-5"
                        card_name={name} name_class=" m-0 p-0"
                        card_text={text} text_class="text-black m-0 p-0"
                        price={price} price_class="font-black m-0 p-0" />
            })}
        </div>
}


const All_card_2 = (props) => {
    return <div className="container m-auto grid grid-cols-2 md:grid-cols-4 my-16 xl:text-2xl" >
        {card_arr_2.map((obj, index) => {
            const { img, name, price, text } = obj
            return <Card src={img} key={index} send_data={() => props.get_data(obj)} width="100%" class="mx-2 mt-5"
                card_name={name} name_class=" m-0 p-0"
                card_text={text} text_class="text-black m-0 p-0"
                price={price} price_class="font-black m-0 p-0" />
        })}
    </div>
}


export { All_card, All_card_2 }
