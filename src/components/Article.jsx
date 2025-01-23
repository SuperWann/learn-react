import { GlobalContext } from "../context";
import { useContext } from "react";

function Article (props) {
    const user = useContext(GlobalContext); //Penerapan fitur Global Context

    return (    
        <>
            <h3>{props.title}</h3>
            <small>Tags: {props.tags}, Date: {props.date}</small>
            <small>Ditulis oleh {user.name}</small> {/* Penerapan fitur Global Context */}
        </>
    )
}

export default Article; // Agar dapat diakses di file lain