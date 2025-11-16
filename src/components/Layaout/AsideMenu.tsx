import React from 'react';

import { ChartBar, Settings, Gamepad2 } from 'lucide-react';

import { Link } from "react-router";

const AsideMenu: React.FC = () => {
    // const currentUrl = window.location.pathname
    // console.log(currentUrl);

    return (
        <aside className='bg-gray-400 flex-col w-min absolute top-1/2 -translate-y-1/2 p-2 rounded-r-3xl [&>*]:[&>*]:size-[50px] [&>*]:[&>*]:p-2 [&>*]:[&>*]:text-gray-50 hover:[&>*]:[&>*]:text-gray-300 hover:[&>*]:[&>*]:cursor-pointer'>
            <Link to="/game"><Gamepad2 /></Link>
            <Link to="/results"><ChartBar /></Link>
            <Link to="/settings"><Settings /></Link>
        </aside>
    )
}

export default AsideMenu;
