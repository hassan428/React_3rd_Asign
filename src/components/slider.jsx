import slider_1 from '../assets/img/slider_1.jpg';
import slider_2 from '../assets/img/slider_2.jpg';
import { Btn } from './button';
import { Heading } from './heading';
import { Text } from './text';



const Slider = (props) => {
    return (
        <>
            <div className={`${props.class} flex space-x-28 items-center pt-10 xl:pt-20 mb-20 bg-red-200`} >
                <div>
                    <img src={slider_1} height={"600px"} />
                </div>
                <div className='font-black'>
                    <Heading text="30% off" class="text-red-800 font-serif italic text-6xl xl:text-8xl" />
                    <br />
                    <Heading text="Comfort Chair" class="text-4xl  xl:text-6xl" />
                    <Text text="Collect from Daxone & get 30% Discount." class="xl:text-2xl my-2" />
                    <Btn text="SHOP NOW" class="hover:px-5 hover:py-1" />
                </div>
            </div>
        </>
    )
}

export { Slider }