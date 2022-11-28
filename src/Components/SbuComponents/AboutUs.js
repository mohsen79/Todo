import { Link, Outlet } from "react-router-dom";
import Header from "./Header";

export default function AboutUs() {
    return (
        <div>
            <Header />
            <Outlet />
            <h2>About Us Page</h2>
            <span className="d-flex p-1 justify-content-evenly w-25">
                <Link to="projects" >projects</Link>
                <Link to="employees" >employees</Link>
            </span>
        </div>
    );
}