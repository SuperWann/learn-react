import { useEffect, useState } from 'react';
import Article from '../components/Article';
import postsData from '../posts.json'
import Search from '../components/Search'

function Homepage() {

    const [posts, setPosts] = useState(postsData);
    const [countPosts, setCountPosts] = useState(postsData.length);
    const [apiPosts, setApiPosts] = useState([]);

    const searchValue = (value) =>{
        const filterDataPost = postsData.filter((post) => 
            post.title.toLowerCase().includes(value.toLowerCase()) //toLowerCase berfungsi untuk merubah value menjadi lower tanpa memengaruhi teks pada tampilan
        )
        setPosts(filterDataPost)
        setCountPosts(filterDataPost.length) //Filter Data Post merupakan sebuah array, sehingga dapat menggunakan .length
    }

    useEffect(() => { // useEffect digunakan untuk menjalankan kode tertentu ketika hal tertentu terjadi
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setApiPosts(json))
    }, []); //[posts] merupakan lifecycle componentDidUpdate, disini digunakan untuk menjalankan useEffect ketika "posts" terjadi perubahan

    useEffect(() => {
        console.log('ada data terbaru')
    }, [posts]); //MULTIPLE useEffect dapat digunakan, dengan contoh study case pada baris ini yang ingin menggunakan useEffect ketika "posts" terjadi perubahan

    return (
        <>
            <h1>Blog</h1>
            <Search searchValue={searchValue} count={countPosts}/>  {/* Ketika props "searchValue" jalan pada component search, maka akan dijalankan disini */}
            {/* {posts.map((post) => (
                <Article title={post.title} tags={post.tags} date={post.date}/>
            ))} */}
            {/* {posts.map(({title, tags, date}, index) => ( //DESTRUCTURING
                // <Article title={title} tags={tags} date={date}/> 
                <Article {...{title, tags, date}} key={index}/> //SPREAD ATTRIBUTES (urutan disesuaikan dengan parameter)
            ))} */}
            {posts.map((props, index) => ( 
                // <Article title={title} tags={tags} date={date}/> 
                <Article {...props} key={index}/> //lebih singkat lagi
            ))}

            <hr />

            <h1>Consume API Posts</h1>
            {apiPosts.map((item, index ) => {
                return (
                    <div key={index}>
                        <h3>{item.title}</h3>
                        <small>{item.body}</small>
                    </div>
                )
            })}
        </>
    )
}

export default Homepage;