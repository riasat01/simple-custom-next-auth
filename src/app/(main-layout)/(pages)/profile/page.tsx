'use client'

import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../../../../redux/features/user/userSlice";
import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import { RootState } from "../../../../../redux/store";


const ProfilePage = () => {
    const {user} = useSelector((state: RootState) => state.userReducer);
    const dispatch = useDispatch();
    const router = useRouter();
    // console.log(user);
    useLayoutEffect(() => {
        // console.log(user?.email);
        if(!user?.email){
            router.push('/');
        }
    }, [user, router]);
    return (
        <div>
            this is profile page
            <p>{user?.name}</p>
            <p>{user?.email}</p>
            <button onClick={() => dispatch(removeUser())}>LogOut</button>
        </div>
    );
};

export default ProfilePage;