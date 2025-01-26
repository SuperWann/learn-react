import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function SinglePost() {

    //SEBELUM MENGGUNAKAN REACT ROUTER DATA LOADER

    // const params = useParams();
    // const [post, setPost] = useState('');

    // useEffect(() => { // useEffect digunakan untuk menjalankan kode tertentu ketika hal tertentu terjadi
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    //         .then(response => response.json())
    //         .then(json => setPost(json))
    // }, []);


    //SETELAH MENGGUNAKAN REACT ROUTER DATA LOADER

    const post = useLoaderData();

    return (
        <>
            {/* post? digunakan untuk mengecek apakah post ada atau tidak */}
            <h1>{post?.title}</h1> 
            <small>{post?.body}</small> 
        </>
    )
}

export default SinglePost;
