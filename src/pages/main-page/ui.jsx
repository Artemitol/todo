import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <>
            <Link to={"test-page-1"}>Test Page 1</Link>
            <Link to={"test-page-2"}>Test Page 2</Link>
            <div className="home-page">Hello world</div>
        </>
    )
}