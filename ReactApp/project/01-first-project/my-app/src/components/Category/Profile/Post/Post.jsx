import React from 'react';


const Post = (props) => {
    return(
    
        <div className="post__item">
            <img src="http://placehold.it/50x50" />
            <div className="post__content">
                <p className="post__text">{ props.message }</p>     
                <div className="like__counter"> { props.likeCounter } </div> 
            </div>             
        </div>
    
    )
}



export default Post;