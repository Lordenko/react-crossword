import { Routes, Route } from "react-router-dom";

import PublicLayaout from "../components/Layaout/PublicLayaout"
import { routes } from './routers'

const App = () => {
    return (
        <Routes>
            <Route element={<PublicLayaout />}>
                <Route path="/" element={<routes.Start />} />
                <Route path="/game" element={<routes.Game />} />
                <Route path="/settings" element={<routes.Settings />} />
                <Route path="/results" element={<routes.Results />} />
            </Route>

            <Route path="*" element={<div> 404: no find! </div>} />
        </Routes>
    )
}

export default App;