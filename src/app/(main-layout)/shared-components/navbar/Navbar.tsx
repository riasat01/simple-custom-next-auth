'use client'

import Link from "next/link";
import { useSelector } from "react-redux";


const Navbar = () => {
    const { user } = useSelector((state) => state.userReducer);
    // console.log(user?.email);
    return (
        <div className="py-4">
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