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
    await sleep(2500);
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    setComments(response.data);
    setfetching(false);

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  }


  return (
    <div>
      {fetching ? <p>Loading Comments</p> : ''}
      {comments.length ?
        comments.map(comment => (
          <div key={comment.id} style={{background: 'grey', padding: '0 10px', margin: '5px'}}>
            <div>
              <h3>{comment.name}</h3>
              comment by: {comment.email}
            </div>

            <p>{comment.body}</p>
          </div>
        ))
        :
        <div>No Comments</div>
      }
    </div>
  )
}

export default Comments;