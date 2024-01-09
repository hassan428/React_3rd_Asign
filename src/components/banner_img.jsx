import img_banner from '../assets/img/banner_img.png'


const Banner_img = (props) => {
    return (

        <>
            <div className={`${props.class} flex justify-center cursor-pointer w-full my-12`}>
            <img src={img_banner} alt="" />
            </div>
        </>
    )
}

export { Banner_img }