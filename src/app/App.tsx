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
                <Route path="/results/:name" element={<routes.Results />} />
                <Route path="*" element={<routes.Error404 />} />
            </Route>
        </Routes>
    )
}

export default App;