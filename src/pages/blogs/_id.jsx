import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function SinglePost() {
    const params = useParams();
    const [post, setPost] = useState('');

    useEffect(() => { // useEffect digunakan untuk menjalankan kode tertentu ketika hal tertentu terjadi
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then(response => response.json())
            .then(json => setPost(json))
    }, []);

    return (
        <>
            {/* post? digunakan untuk mengecek apakah post ada atau tidak */}
            <h1>{post?.title}</h1> 
            <small>{post?.body}</small> 
        </>
    )
}

export default SinglePost;
