import { Link } from "react-router-dom"


export default function TestPage2() {
    return (
        <>
            <Link to={"/"}>Main</Link>
            <div className="test-page">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                fuga nulla nobis officia velit, impedit voluptate laboriosam
                aperiam in quasi ad neque corporis optio voluptates? Sint qui
                animi consectetur beatae.
            </div>
        </>
    )
}