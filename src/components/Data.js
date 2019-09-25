import React, { Component } from 'react';
import axios from 'axios';
import Comments from './Comments';


class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      data: [],
    }
  }

  componentDidMount() {
    this.getPosts();
  }

  async getPosts() {
    this.setState({ isFetching: true })
    await sleep(2000);
    axios.get(`https://jsonplaceholder.typicode.com/posts/`)
      .then(res => {
        sleep(
          this.setState((oldState, props) => {
            const parseData = res.data.slice(0, 5);
            return { isFetching: false, data: parseData };
          }),
          2500)
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({ isFetching: false })

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

  }

  render() {
    return (
      <div style={{ margin: '20px' }}>
        <div>
          {!this.state.isFetching ?
            this.state.data.map(post => (
              <div style={{ border: '1px black solid', padding: '0 30px' }} key={post.id}>
                <h4 style={{ color: 'red' }}>{post.title}</h4> - Posted by: {post.userId}
                <p>{post.body}</p>
                <div>
                  <h3>Comments:</h3>
                  <Comments postId={post.id} />
                  `</div>
              </div>
            ))
            :
            <div>
              Loading.........
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Data;