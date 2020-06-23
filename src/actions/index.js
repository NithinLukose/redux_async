export const fetchPosts = () => {

    return async dispatch => {

        let posts = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(res=>res)
        dispatch({
            type:'FETCH_POSTS',
            posts
        })

    }

}
export const addPost = (title,body) => {

    return async dispatch => {
        let post = await fetch('https://jsonplaceholder.typicode.com/posts',{
                        method:'post',
                        body:JSON.stringify({
                            title,
                            body,
                        }),
                        headers: {
                            "content-type": "application/json; charset=UTF-8"
                        }
                    })
                    .then(res=> res.json())
        
        dispatch({
            type: 'ADD_POST',
            post
        })            
    }

}