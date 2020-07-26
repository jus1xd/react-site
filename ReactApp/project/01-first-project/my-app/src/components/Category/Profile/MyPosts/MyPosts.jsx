import React from 'react';
import Post from '../Post/Post';


const MyPosts = () => {
    return(
        <div className="post">
            <div className="post__create">
                <p className="post__title">My posts</p>
                <textarea  maxLength="242" placeholder="..your news" className="post__input"></textarea><br></br>
                <div className="post__button">
                    <a target="_blank" href='#'>Post</a>
                </div>
            </div>
                <Post likeCounter="3"  message="Hey, why nobody love me?" />
                <Post likeCounter="13" message="It's our new program!" />
            </div>
    )
}



export default MyPosts;