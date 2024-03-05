'use client'

import { cookies } from "next/headers";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { removeUser, setUser } from "../../../../../redux/features/user/userSlice";


const LoginPage = () => {
    // const [user, setUser] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const dispatch = useDispatch();

    const handleLogin = async (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        const form = e?.target as any;
        const email = form?.email?.value;
        const password = form?.password?.value;

        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        const { user } = await res.json();
        if (user?.email) {
            // setUser(user);
            dispatch(setUser(user));
            setError('');
            form.reset();
            router.push('/profile');
            console.log(`Name: ${user?.name}  Email: ${user?.email}  Password: ${password}`);
            // cookies().set({
            //     name: user?.name,
            //     email: user?.email,
            //     password: password
            // })
            document.cookie = `name=${user?.name};`;
            document.cookie = `email=${user?.email};`;
            document.cookie = `password=${password};`;
        } else if (user === 'invalid') {
            setError('Invalid Credentials');
            dispatch(removeUser());
        } else {
            setError('User not found');
            dispatch(removeUser());
        }
    }
    return (
        <>
            <section className="w-full md:w-2/3 lg:w-1/3 mx-auto">
                {
                    error && <h3 className="p-4 border-b-red-400 border-b-2 shadow-lg rounded-md text-red-400 font-medium text-center">{error}</h3>
                }
                <h1 className="my-4 w-full rounded-md py-8 bg-green-400 text-white font-bold text-4xl text-center">Login</h1>
                <form className="space-y-4" onSubmit={handleLogin}>
                    <input className="w-full rounded-md px-4 py-2 bg-transparent text-gray-600 border-gray-400 border-2" placeholder="Email" type="email" name="Email" id="email" />
                    <input className="w-full rounded-md px-4 py-2 bg-transparent text-gray-600 border-gray-400 border-2" placeholder="Password" type="password" name="Password" id="password" />
                    <input className="w-full rounded-md py-2 border-2 border-green-400 hover:border-transparent bg-gradient-to-tr from-white to-white hover:from-green-400 hover:to-green-400  text-gray-600 hover:text-white font-bold text-lg" type="submit" value="Login" />
                </form>
            </section>
        </>
    );
};

export default LoginPage;