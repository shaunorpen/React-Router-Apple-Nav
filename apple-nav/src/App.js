import React from 'react';
import { Route, Link } from 'react-router-dom';
import './css/App.css';

import navLinksData from './data';

function CreateLinks (props) {
  return (
    <div className='link'>
      <Link to={`/${props.linkData.id}`}>
        {props.linkData.title}
      </Link>
    </div>
  );
}

function CreateSubLinks (props) {
  debugger
  return (
    <div className='sublinks'>
      Test
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className='links'>
        {
          navLinksData.map(link => <CreateLinks linkData={link} key={link.id} />)
        }
      </div>
      <div className='sub-links'>
        <Route path='/:id' render={props => <CreateSubLinks {...props} />} />
      </div>
    </div>
  );
}

export default App;
