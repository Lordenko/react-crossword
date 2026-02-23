import { Outlet } from "react-router-dom";

import AsideMenu from './AsideMenu'
import CookiePopup from "../Shared/CookiePopup";
import { useCookiePopup } from "../../states/CookiePopupLogicState";

const PublicLayaout = () => {
    const { consentStatus } = useCookiePopup()

    const content = consentStatus ?
        <>
            <AsideMenu></AsideMenu>
            <main className='h-screen content-center text-center'>
                <Outlet />
            </main>
        </>
        : null

    return (
        <>
            {content}
            <CookiePopup />
        </>
    )
}

export default PublicLayaout;
