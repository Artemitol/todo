import { BrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import "./globals.scss"
import { HomePage, TestPage1, TestPage2 } from "../pages";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path={"/"} element={<HomePage />} />
                <Route path={"/test-page-1"} element={<TestPage1 />} />
                <Route path={"/test-page-2"} element={<TestPage2 />} />
            </Routes>
        </BrowserRouter>
    )
}