import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const MainLayouts = () => {
    return (
        <div >
            <div>
                <Nav />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayouts;