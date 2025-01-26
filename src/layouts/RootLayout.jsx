import {NavLink, Outlet} from "react-router-dom";

import "../styles/index.css"

function RootLayout() {
    return (
        <>
            <NavLink className={({isActive}) => isActive ? "active" : ""} style={{marginRight: "5px"}} to="/">Home</NavLink> |
            <NavLink className={({isActive}) => isActive ? "active" : ""} style={{marginRight: "5px", marginLeft: "5px"}} to="/blogs">Blog</NavLink> |
            <NavLink className={({isActive}) => isActive ? "active" : ""} style={{marginLeft: "5px"}} to="/about">About</NavLink> 
            <Outlet /> {/* semua halaman children masuk kedalam outlet */}
        </>
    )
}

export default RootLayout;