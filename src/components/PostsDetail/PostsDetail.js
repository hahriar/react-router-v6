import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const PostsDetail = () => {
    const {postId} = useParams();
    console.log('is params',postId);
    const[post, setPost] = useState({});
    useEffect( ()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [postId])
    return (
        <div>
            <h4> This is post Detail</h4>
            <h5>{post.title}</h5>
            <p><small>{post.body}</small></p>
        </div>
    );
};

export default PostsDetail;