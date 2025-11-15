import React from 'react';
import { Outlet } from "react-router-dom";

import AsideMenu from './AsideMenu'

interface MainLayoutProps {
    children: React.ReactNode;
}

const PublicLayaout = () => {
    return (
        <>
            <AsideMenu></AsideMenu>
            <main className='h-screen content-center text-center'>
                <Outlet />
            </main>
        </>
    )
}

export default PublicLayaout;
