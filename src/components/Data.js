import React, { Component } from 'react';
import axios from 'axios';
import DisplayPost from './DisplayPost';

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      data: [],
      pages: [],
      activePage: 2,
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
        this.setState((oldState, props) => {
          const parseData = res.data.slice(0, 5);


          return { isFetching: false, data: parseData };
        })
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
              <DisplayPost post={post} key={post.id} />
            ))
            :
            <div>
              Getting Posts.........
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Data;