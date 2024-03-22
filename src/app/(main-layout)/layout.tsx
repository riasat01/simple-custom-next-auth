'use client'
import { ReactNode } from "react";
import Navbar from "./shared-components/navbar/Navbar";


const MainLayout = ({children}: {children: ReactNode}) => {
    return (
        <div onScroll={() => console.log('scrolling...')}>
            <Navbar />
            {children}
        </div>
    );
};

export default MainLayout;