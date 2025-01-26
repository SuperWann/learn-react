import { useState } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Blog () {

    //SEBELUM MENGGUNAKAN REACT ROUTER DATA LOADER
    
    // const [apiPosts, setApiPosts] = useState([]);
    
    // useEffect(() => { // useEffect digunakan untuk menjalankan kode tertentu ketika hal tertentu terjadi
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(response => response.json())
    //         .then(json => setApiPosts(json))
    // }, []); //[posts] merupakan lifecycle componentDidUpdate, disini digunakan untuk menjalankan useEffect ketika "posts" terjadi perubahan
    

    //SETELAH MENGGUNAKAN REACT ROUTER DATA LOADER

    const apiPosts = useLoaderData();

    return(
        <>
            <h1>Consume API Posts</h1>
            {apiPosts.map((item, index ) => {
                return (
                    <div key={index}>
                        <Link to={`/blog/${item.id}`}>
                            <h3>{item.title}</h3>
                        </Link>
                    </div>
                )
            })}
        </>
    )
    
}

export default Blog;