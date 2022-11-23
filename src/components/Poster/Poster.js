import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Poster = () => {
    const [posts, setPosts] = useState([]);
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data));
    }, [])
    return (
        <div>
            <h2> Everypost faceboook Ever had : {posts.length}</h2>
            {
                posts?.map(post => <Link to={`/posts/${post.id}`}>{post.id}</Link>)
            }
            {/* <Outlet/> */}
        </div>
    );
};

export default Poster;