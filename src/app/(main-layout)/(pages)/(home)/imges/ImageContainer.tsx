'use client'

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
import ImageCard from "./image-card/ImageCard";
import { useEffect, useState } from "react";

const ImageContainer = () => {
    const images = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
    const [length, setLength] = useState<number>(4);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        addEventListener('scroll', () => {
            console.log(innerHeight, document.documentElement.scrollHeight, scrollY);
            if (innerHeight + scrollY === document.documentElement.scrollHeight) {
                setIsLoading(true);
                setLength(() => length + 4 >= images?.length ? images?.length : length + 4);
                setIsLoading(false);
            }
        })
    }, [document.documentElement.scrollHeight, images.length])
    return (
        <section>
            <h1>Images</h1>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8 px-8 md:px-12 lg:px-24 w-fit overflow-hidden">
                {
                    images?.slice(0, length)?.map((image, i) => <ImageCard key={i} image={image} index={i} />)
                }
                {
                    isLoading && <h1 className="text-3xl text-center">Loading...</h1>
                }
            </section>
        </section>
    );
};

export default ImageContainer;