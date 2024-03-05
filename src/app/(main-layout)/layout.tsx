import { ReactNode } from "react";
import Navbar from "./shared-components/navbar/Navbar";


const MainLayout = ({children}: {children: ReactNode}) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default MainLayout;