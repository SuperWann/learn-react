function Article (props) {
    return (    
        <>
            <h3>{props.title}</h3>
            <small>Tags: {props.tags}, Date: {props.date}</small>
        </>
    )
}

export default Article; // Agar dapat diakses di file lain