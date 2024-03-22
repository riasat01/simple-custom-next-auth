'use client'
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';

const ImageCard = ({image, index} : {image: StaticImageData, index: number}) => {
    const [show, setShow] = useState(false)
    const handleShow = (flag: boolean) => {
        // console.log(flag);
        setShow(flag);
    }
    return (
        <div className='relative w-fit h-fit overflow-hidden hover:scale-105 duration-300' onMouseEnter={() => handleShow(true)} onMouseLeave={() => handleShow(false)}>
            <Image src={image} alt="image" className="rounded-lg" />
            <section className={`rounded-lg absolute h-full w-full bg-slate-900 ${show ? 'bg-opacity-50 -translate-x-0 -translate-y-0' : `bg-opacity-0 ${index % 2 === 1? `-translate-x-full -translate-y-full`:  `translate-x-full translate-y-full`}`} duration-300 inset-0 z-10`}></section>
        </div>
    );
};

export default ImageCard;