import {connect} from 'react-redux'
import React from 'react'
import {addPost} from '../actions'

const AddPostForm = ({dispatch}) => {

    const handleSubmit = (e) => {

        e.preventDefault()
        let title = e.target.title.value
        let body = e.target.body.value
        if(title&&body){
            dispatch(addPost(title,body))
        }
        e.target.title.value = ''
        e.target.body.value=''

    }
    return(

        <>
            <form onSubmit={handleSubmit}>

                <label>title</label>
                <input type="text" name="title"/>
                <br/>
                <label>body</label>
                <input type="text" name="body" />
                <br/>
                <input type="submit" value="add" />

            </form>
        </>

    )

}

export default connect()(AddPostForm)
