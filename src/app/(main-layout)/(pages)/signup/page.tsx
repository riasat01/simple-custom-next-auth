'use client'

import {  useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeUser, setUser } from "../../../../../redux/features/user/userSlice";

const SignUpPage = () => {
    const [isRegistered, setIsRegistered] = useState(false);
    const [error, setError] = useState('');
    // const [password, setPassword] = useState('');
    const router = useRouter();
    const dispatch = useDispatch()

    const handleSignUp = async (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        const form = e?.target as any;
        const name = form?.name?.value;
        const email = form?.email?.value;
        const password = form?.password?.value;
        // console.log(name, email, password);
        try {
            const isExistingUser = await fetch('/api/getuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email
                })
            });
            const { user } = await isExistingUser.json();
            console.log('inside sign up', user);
            if (user) {
                console.log("existing user");
                setError('existing user');
                router.push('/');
                return;
            }
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            });
            if (res?.ok) {
                form?.reset();
                setIsRegistered(true);
                setError('');
                dispatch(setUser({name, email, password}));
                router.push('/profile');
            } else {
                console.log("User registration failed", res);
                setError('User registration failed');
                dispatch(removeUser());
            }
        } catch (error) {
            console.log("Error while registration");
            setError('Error while registration');
            dispatch(removeUser());
        }


    }

    useEffect(() => {
        const timeoutId = setTimeout(() => setIsRegistered(false), 2000);
        // return clearTimeout(timeoutId);
    }, [isRegistered])
    return (
        <>
            <section className="w-full md:w-2/3 lg:w-1/3 mx-auto">
                {
                    isRegistered && <h3 className="p-4 border-b-green-400 border-b-2 shadow-lg rounded-md text-green-400 font-medium text-center">Congratulations! Sign Up successful</h3>
                }
                {
                    error && <h3 className="p-4 border-b-red-400 border-b-2 shadow-lg rounded-md text-red-400 font-medium text-center">{error}</h3>
                }
                <h1 className="my-4 w-full rounded-md py-8 bg-green-400 text-white font-bold text-4xl text-center">Sign Up</h1>
                <form className="space-y-4" onSubmit={handleSignUp}>
                    <input className="w-full rounded-md px-4 py-2 bg-transparent text-gray-600 border-gray-400 border-2" placeholder="Name" type="text" name="Name" id="name" required />
                    <input className="w-full rounded-md px-4 py-2 bg-transparent text-gray-600 border-gray-400 border-2" placeholder="Email" type="email" name="Email" id="email" required />
                    <input className="w-full rounded-md px-4 py-2 bg-transparent text-gray-600 border-gray-400 border-2" placeholder="Password" type="password" name="Password" id="password" required />
                    <input className="w-full rounded-md py-2 border-2 border-green-400 hover:border-transparent bg-gradient-to-tr from-white to-white hover:from-green-400 hover:to-green-400  text-gray-600 hover:text-white font-bold text-lg" type="submit" value="Sign Up" />
                </form>
            </section>
        </>
    );
};

export default SignUpPage;