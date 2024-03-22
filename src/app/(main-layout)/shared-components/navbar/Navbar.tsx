'use client'

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import { useEffect, useState } from "react";


const Navbar = () => {
    const { user } = useSelector((state: RootState) => state.userReducer);
    // console.log(window.innerHeight);
    const [value, setValue] = useState<boolean>(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            // console.log(`screenTop: ${window.screenTop}, pageYOffset: ${window.pageYOffset}, screenY: ${window.screenY}, scrollY: ${window.scrollY}`);
            if(scrollY > 5){
                setValue(true);
            }else{
                setValue(false);
            }
        })
    }, []);
    return (
        <div className={`py-4 bg-slate-900 ${value ? `fixed inset-0  bg-opacity-50 text-white`:`absolute inset-0 bg-opacity-0 text-base`} w-full h-12 duration-300 z-50`}>
            <ul className="flex justify-center items-center gap-6 text-center">
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/login'>Login</Link>
                </li>
                <li>
                    <Link href='/signup'>Sign UP</Link>
                </li>
                {
                    user?.email ?
                        <li>
                            <Link href='/profile'>Profile</Link>
                        </li>
                        :
                        <></>
                }
            </ul>
        </div>
    );
};

export default Navbar;