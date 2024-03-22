import Image from "next/image";
import bannerImg from "../../../../../../public/images/banner.jpg";


const Banner = () => {
    return (
        <Image src={bannerImg} alt="banner" height={1400} width={500} className="w-screen h-screen"/>
    );
};

export default Banner;