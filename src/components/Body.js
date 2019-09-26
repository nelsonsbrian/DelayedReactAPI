import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Data from './Data';
import Post from './Post';

const Body = () => {
  const [key, setKey] = useState('post');


  const APITabs = () => {
    return (
      <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
        <Tab eventKey="all" title="All">
          <Data />
        </Tab>
        <Tab eventKey="post" title="Post">
          <Post />
        </Tab>
        <Tab eventKey="other" title="Other" disabled>
          {/* <Sonnet /> */}
        </Tab>
      </Tabs>
    );
  }

  return (<APITabs />);

}

export default Body;