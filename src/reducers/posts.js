
const posts = (state = [],action) => {

    switch(action.type){
        case 'FETCH_POSTS':
            return action.posts
        case 'ADD_POST':
            return [...state,action.post]
        default:
            return state
    }

}

export default posts