import React from 'react';
import Comments from './Comments';

const DisplayPost = (props) => {
  const { id, title, userId, body } = props.post;
  return (
    <div style={{ border: '1px black solid', padding: '0 30px' }} key={id}>
      <h4 style={{ color: 'red' }}>{title}</h4> - Posted by: {userId}
      <p>{body}</p>
      <div>
        <h5>Comments:</h5>
        <Comments postId={id} />
        `</div>
    </div>

  );
}

export default DisplayPost;