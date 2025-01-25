import { useEffect, useState } from 'react';
import Article from '../components/Article';
import postsData from '../posts.json'
import Search from '../components/Search'

function Homepage() {
    const [posts, setPosts] = useState(postsData);
    const [countPosts, setCountPosts] = useState(postsData.length);

    const searchValue = (value) =>{
        const filterDataPost = postsData.filter((post) => 
            post.title.toLowerCase().includes(value.toLowerCase()) //toLowerCase berfungsi untuk merubah value menjadi lower tanpa memengaruhi teks pada tampilan
        )
        setPosts(filterDataPost)
        setCountPosts(filterDataPost.length) //Filter Data Post merupakan sebuah array, sehingga dapat menggunakan .length
    }

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
        </>
    )
}

export default Homepage;