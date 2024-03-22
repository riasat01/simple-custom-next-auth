import Image from "next/image";
import bannerImg from "../../../../../../public/images/banner.jpg";


const Banner = () => {
    return (
        <Image src={bannerImg} alt="banner" height={500} width={1400} className="w-screen h-screen"/>
    );
};

export default Banner;