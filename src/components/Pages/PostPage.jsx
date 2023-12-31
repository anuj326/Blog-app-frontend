import {  formatISO9075 } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {UserContext} from '../UserContext'


function PostPage() {
    const ENDPOINT = 'http://3.14.245.184:4000';
    const [postInfo ,setPostInfo] = useState(null);
    const {userInfo} = useContext(UserContext)
    const params = useParams();
     const id = params.id;
     console.log(id);
    useEffect(()=>{
        const response = fetch(ENDPOINT+`/getPost/${id}`)
        .then(response =>{
            response.json()
        .then(postInfo =>{
                setPostInfo(postInfo)
            })
        })
        console.log(ENDPOINT+`/getPost/`+id);
    },[])

    if(!postInfo){
        return '';
    }

  return (
    <div className='post-page'>
        <h1>{postInfo.title}</h1>
        <time>{formatISO9075(new Date(postInfo.createdAt))}</time>    
        <div className="author">by @{postInfo.author.username}</div>
        {userInfo.id === postInfo.author._id && (
            <div className='edit-row'>
                <Link className='edit-btn' to={`/edit/${postInfo._id}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>

                    Edit this Post</Link>
                    
                        {/* <Link className='delete-btn' onClick={deletePost} >Delete Post</Link> */}
                    
            </div>
            
        )} 
        <div className='image'>
            <img src={ENDPOINT+`/${postInfo.cover}`} alt="Post Image" />
        </div>
       
        <div dangerouslySetInnerHTML={{__html:postInfo.content}} />
    </div>
  )
}

export default PostPage