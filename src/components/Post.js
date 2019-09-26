import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


const Post = () => {
  const [userId, setUserId] = useState(1);
  const [title, setTitle] = useState("Best Day Ever!");
  const [body, setBody] = useState("What is on your mind...");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
  }

  return ( // userId, title, body
    <div style={{ padding: '5px 15px' }}>
      <h2 style={{ textAlign: 'center' }}>Add a Post</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="postForm.userId">
            <Form.Label>UserId</Form.Label>
            <Form.Control
              type="number"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="postForm.title">
            <Form.Label>Post Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="postForm.body">
          <Form.Label>What are you up to?</Form.Label>
          <Form.Control as="textarea"
            rows="3"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Post;
