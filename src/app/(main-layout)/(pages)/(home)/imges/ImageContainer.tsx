import img0 from "../../../../../../public/images/0.jpg";
import img1 from "../../../../../../public/images/1.jpg";
import img2 from "../../../../../../public/images/2.jpg";
import img3 from "../../../../../../public/images/3.jpg";
import img4 from "../../../../../../public/images/4.jpg";
import img5 from "../../../../../../public/images/5.jpg";
import img6 from "../../../../../../public/images/6.jpg";
import img7 from "../../../../../../public/images/7.jpg";
import img8 from "../../../../../../public/images/8.jpg";
import img9 from "../../../../../../public/images/9.jpg";
import img10 from "../../../../../../public/images/10.jpg";
import img11 from "../../../../../../public/images/11.jpg";
import img12 from "../../../../../../public/images/12.jpg";
import Image from "next/image";
import ImageCard from "./image-card/ImageCard";

const ImageContainer = () => {
    const images = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
    return (
        <section>
            <h1>Images</h1>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 md:px-12 lg:px-24">
                {
                    images?.map((image, i) => <ImageCard key={i} image={image} />)
                }
            </section>
        </section>
    );
};

export default ImageContainer;