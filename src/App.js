import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import {fetchPosts} from './actions'
import './App.css';
import VisiblePosts from "./container/visiblePosts"
import AddPostForm from './container/addPostForm'

function App() {

  const dispatch = useDispatch()
  useEffect(()=>{

    dispatch(fetchPosts())

  },[dispatch])
  return (
    <>
    <AddPostForm />
    <VisiblePosts />
    
    </>
  );
}

export default App;
