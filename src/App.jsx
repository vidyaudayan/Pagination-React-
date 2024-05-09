import React from 'react'
import Pagination from './components/Pagination';
import Post from './components/Post';
import { useState,useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(false);
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage, setPostsPerPage] = useState(2);

useEffect(() => {
  const fetchPosts = async () => {
    setLoading(true);
    try {
     // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const response= await fetch('https://fakestoreapi.com/products');
      //then(res=>res.json())
     // .then(json=>console.log(json))
     const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  fetchPosts();
}, []);

const indexOfLastPost= currentPage*postsPerPage;
const indexOfFirstPost= indexOfLastPost-postsPerPage;
const currentPosts= posts.slice(indexOfFirstPost,indexOfLastPost);


const paginate= (pageNumber,active)=>{
  setCurrentPage(pageNumber);

}
  return (
  <>

<Post posts={currentPosts} loading={loading} />
<Pagination  length={posts.length}
  postsPerPage={postsPerPage}
 paginate={paginate}/>
</>
  )
}

export default App

