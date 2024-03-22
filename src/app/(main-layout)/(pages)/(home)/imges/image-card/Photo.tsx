import Image, { StaticImageData } from 'next/image';
import React from 'react';

const Photo = ({image}: {image: StaticImageData}) => {
    return (
        <Image src={image} alt="image" height={300} width={300} className="rounded-lg scale-100 hover:scale-110 duration-300" />
    );
};

export default Photo;