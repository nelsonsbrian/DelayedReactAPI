import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comments = (props) => {
  // console.log(props)
  const { postId } = props;
  const [comments, setComments] = useState([]);
  const [fetching, setfetching] = useState(false);


  useEffect(() => {

    getComments();
  }, [])

  const getComments = async () => {
    setfetching(true);
    await sleep(750);
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    setComments(response.data);
    setfetching(false);

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  }

  const showComments = () => {
    if (comments.length && !fetching) {
      return (
        comments.map(comment => (
          <div key={comment.id} style={{ background: 'grey', padding: '0 10px', margin: '5px' }}>
            <div >
              <h5 style={{ display: 'inline' }}>{comment.name}</h5>
              <p style={{ display: 'inline' }}> comment by: {comment.email}</p>
            </div>
            <p>{comment.body}</p>
          </div>
        ))
      )
    }

    if (fetching) {
      return <p>Loading Comments......</p>
    }

    return <div>No Comments</div>
  }


  return (
    <div>
      {showComments()}
    </div>
  )
}

export default Comments;