import banner from '../assets/img/banner.jpg';
import { Btn } from './button';
import { Heading } from './heading';
import { Text } from './text';



const Banner = (props) => {
    return (
        <>
            <div className={`${props.class} mb-5 mt-20 m-auto flex container justify-between items-center w-full`} >
                <div>
                    <img src={banner} height={"650px"} width={"650px"} />
                </div>
                <div className='m-5 p-3'>
                    <Text text="Lorem ipsum is simply dummy text of the printing and typesetting industry." 
                    class="xl:text-xl" />

                    <Heading text="Winter Discount" class="text-4xl xl:text-5xl m-0 p-0" />
                    <Heading text="Up to 30%" class=" text-2xl m-0 p-0" />
                    <br />
                    <Text text="It is a long established fact that a reader
                    will be distracted by the readable content of a page when
                    looking at this layout." class="xl:text-xl mb-2" />
                    
                    <Btn text="SHOP NOW" class="hover:xl:px-5 hover:px-3 hover:py-1" />
                </div>
            </div>
        </>
    )
}

export { Banner }