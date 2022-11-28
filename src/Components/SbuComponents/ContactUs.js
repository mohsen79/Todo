import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function AboutUs() {
    return (
        <div>
            <Header />
            <Outlet />
            <h2>Contact Us Page</h2>
        </div>
    );
}