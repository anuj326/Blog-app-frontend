import React, { useEffect, useState } from 'react'
import Post from '../Post'


function IndexPage() {
  const ENDPOINT = 'http://3.14.245.184:4000';
  const [posts , setPosts] = useState([]);
  useEffect(()=>{
    fetch(ENDPOINT+'/viewPost').then(response =>{
      response.json().then(posts => {
        setPosts(posts);
      })
    })
  },[])
  //console.log(posts.length);
  return (
    <div>
     {posts.length > 0 && posts.map(post =>(
      <Post {...post} />
     ))}
    </div>
  )
}

export default IndexPage