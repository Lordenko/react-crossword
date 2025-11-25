import React from 'react';

import AsideMenu from '../components/Layaout/AsideMenu'

interface MainLayoutProps {
    children: React.ReactNode;
}

const Layaout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <AsideMenu></AsideMenu>
            <main className='h-screen content-center text-center'>{children}</main>
        </>
    )
}

export default Layaout;
