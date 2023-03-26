import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/header";

function Layout() {
    return (
        <React.Fragment>
            <Header />
            <main>
                <Outlet />
            </main>
        </React.Fragment>
    );
};

export default Layout;