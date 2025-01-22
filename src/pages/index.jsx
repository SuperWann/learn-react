import { useState } from 'react';
import Article from '../components/Article';
import postsData from '../posts.json'
import Search from '../components/Search'

function Homepage() {

    const [posts, setPosts] = useState(postsData);

    const searchValue = (value) =>{
        const filterDataPost = postsData.filter((post) => 
            post.title.includes(value)
        )
        setPosts(filterDataPost)
    }

    return (
        <>
            <h1>Blog</h1>
            <Search searchValue={searchValue} />  {/* Ketika props "searchValue" jalan pada component search, maka akan dijalankan disini */}
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