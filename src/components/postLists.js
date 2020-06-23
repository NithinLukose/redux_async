import React from 'react'
import Post from './post'
const PostLists = ({posts}) => (


    <ul>
        {
            posts.map(post=>(<Post key={post.id} title={post.title} body={post.body} />))
        }
    </ul>

)

export default PostLists