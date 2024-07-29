import {Outlet} from "react-router-dom";
import {Navbar} from "../../../shared/navbar";
import {Footer} from "../../../shared/footer";

export const UserLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};