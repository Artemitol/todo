import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, TestPage1, TestPage2 } from "../pages";
import "./globals.scss"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path={"/"} element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}