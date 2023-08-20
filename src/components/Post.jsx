import React ,{useEffect}from 'react'
import {formatISO9075} from 'date-fns';
import { Link } from 'react-router-dom';

function Post({_id,title, summary , cover, content, createdAt, author}) {
  const ENDPOINT = process.env.REACT_APP_ENDPOINT;
  return (
    <div>
        <div className="post">
        <div className="image">
            <Link to={`/getPost/${_id}`} >
                <img style={{height:'400px'}} src={ENDPOINT+'/'+cover} alt="Post Image" />
            </Link>
          </div>
          <div className="texts">
            <Link to={`/getPost/${_id}`} >
              <h2>{title} </h2>
            </Link>
          <p className="info">
            <a href="#" className="author">{author.username}</a>
            <time>{formatISO9075(new Date(createdAt))}</time>
          </p>
          <p className='summary'>{summary} </p>
          </div>
        </div>
    </div>
  )
}

export default Post