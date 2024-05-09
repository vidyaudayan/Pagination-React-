import React from 'react';
import Pagination from './Pagination';

const Post = ({ posts, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {posts.map((data, id) => (
        <div className='list' key={id}>
          <img className='img' src={data.image} alt="" />
          <div>
          <p className='title'>{data.title}</p>
          <p className='price'>Price: &#36; {data.price}</p>
          
          <p>{data.description}</p>
          <button className='btn'>Add to Cart</button>
          </div>
        
     
        </div>
      ))}
      <Pagination/>
    </>
  );
};

export default Post;