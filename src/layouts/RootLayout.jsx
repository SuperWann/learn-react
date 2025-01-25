import {Link, Outlet} from "react-router-dom";

function RootLayout() {
    return (
        <>
            <Link to="/">Home </Link> |
            <Link to="/blogs"> Blog </Link> |
            <Link to="/about"> About </Link> 
            <Outlet /> {/* semua halaman children masuk kedalam outlet */}
        </>
    )
}

export default RootLayout;