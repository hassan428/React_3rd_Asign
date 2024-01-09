import { Banner } from "./banner";
import { Banner_img } from "./banner_img";
import { Heading_text } from "./heading_text";
import { Slider } from "./slider";
import { All_card, All_card_2 } from "./all_card";
import React, { useState } from "react";
import { Heading } from "./heading";
import { Details_card } from "./details_card";

const Remain_component = (props) => {
  const [first, setfirst] = useState(null)
  let card_obj = (data) => {
    setfirst(data)
  }
  let go_back = () => {
    setfirst(null)
  }

  return <>
    {first ?
      (<> <div className="bg-gray-100">
        <i onClick={go_back} className="fa-solid fa-arrow-left text-4xl p-2 cursor-pointer hover:text-red-700"></i>
      </div>
        <Details_card img={first.img} name={first.name} text={first.text} price={first.price} />
       </>)

      : (<> <Slider />
        <Banner_img />
        <Heading_text class="container text-center w-1/2 m-auto mt-20   "
          heading="Best Sell" text="Lorem ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem ipsum has been the industry's 
          standard dummy text" />
        <All_card get_data={card_obj} />
        <Banner />
        <Heading_text class="container text-center w-1/2 m-auto mt-20"
          heading="All Products" text="Lorem ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem ipsum has been the industry's 
          standard dummy text" />
        <All_card_2 get_data={card_obj} /> </>)

    }</>
}


export { Remain_component }