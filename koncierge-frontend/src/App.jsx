import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SelectModePage from "./pages/SelectModePage";
import MakeCuisine from "./pages/MakeCuisinePage";

function App() {
    const app_css = "flex min-h-screen text-center flex-col items-center justify-center"

    return (
        <div className={app_css}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signUp" element={<SignUpPage />} />
                    <Route path="/selectMode" element={<SelectModePage />} />
                    <Route path="/makeCuisine" element={<MakeCuisine />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;