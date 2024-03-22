'use client'
import { StaticImageData } from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Photo from './Photo';

const ImageCard = ({ image, index }: { image: StaticImageData, index: number }) => {
    const [show, setShow] = useState(false);
    const [onScreen, setOnScreen] = useState<boolean>(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const handleShow = (flag: boolean) => {
        // console.log(flag);
        setShow(flag);
    }
    useEffect(() => {
        addEventListener('scroll', () => {
            const rect = cardRef?.current?.getBoundingClientRect();
            rect?.top && rect?.top + 200 <= innerHeight ? setOnScreen(true) : setOnScreen(false);
        })
    }, [])
    return (
        <div ref={cardRef} style={{ transform: `translateX(${onScreen ? 0 : index % 2 === 1 ?(index % 4 + 1) * 200: -(index % 4 + 1) * 200}%)`, transition: `${1}s` }} className={`duration-1000 relative w-fit h-fit overflow-hidden`} onMouseEnter={() => handleShow(true)} onMouseLeave={() => handleShow(false)}>
            {/* <Image src={image} alt="image" height={300} width={300} className="rounded-lg scale-100 hover:scale-110 duration-300" /> */}
            <Photo image={image} />
            {/* <img src={image} alt="image" className="rounded-lg scale-100 hover:scale-110 duration-300" /> */}

            <section className={`rounded-lg absolute h-full w-full bg-slate-900 ${show ? 'bg-opacity-50 -translate-x-0 -translate-y-0' : `bg-opacity-0 ${index % 2 === 1 ? `-translate-x-full -translate-y-full` : `translate-x-full translate-y-full`}`} duration-300 inset-0 z-10`}></section>
        </div>
    );
};

export default ImageCard;