import React from 'react';

import { ChartBar, Play, Settings, Pause, X } from 'lucide-react';

const AsideMenu: React.FC = () => {
    // const currentUrl = window.location.pathname
    // console.log(currentUrl);

    return (
        <aside className='bg-gray-400 flex-col w-min absolute top-1/2 -translate-y-1/2 p-2 rounded-r-3xl [&>*]:size-[50px] [&>*]:p-2 [&>*]:text-gray-50 hover:[&>*]:text-gray-300'>
            <Play />
            <Pause />
            <X />
            <Settings />
            <ChartBar />
        </aside>
    )
}

export default AsideMenu;
