import { Btn } from "./button";
import { Heading } from "./heading";
import { Logo } from "./logo";
import { Text } from "./text";

const Navbar = (props) => {
  return <>
    <div className={`${props.class} flex justify-evenly items-center font-black py-3 w-full bg-red-200`}>
      <div>
        <Logo />
      </div>
      <div className="flex items-center space-x-5">

        <Text text="Home" />
        <Text text="Shop" />
        <Text text="Mens" />
        <Text text="Pages" />
        <Text text="Blog" />
        <Text text="Contact" />

      </div>
      <div className="flex items-center space-x-3">
        <i className=" fa-solid fa-cart-shopping cursor-pointer hover:text-red-700"></i>
        <Text text="2 Items" />
        <i className=" fa-solid fa-magnifying-glass-arrow-right cursor-pointer hover:text-red-700"></i>
      </div>

    </div>
  </>
};

export { Navbar };
