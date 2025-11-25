import { Outlet } from "react-router-dom";

import AsideMenu from './AsideMenu'

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
