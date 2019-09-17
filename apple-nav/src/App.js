import React from 'react';
import { Link } from 'react-router-dom';
import './css/App.css';

import navLinksData from './data';

function CreateLinks (props) {
  return (
    <div className='link'>
      <Link to={`/${props.linkData.title}`.toLowerCase()}>
        {props.linkData.title}
      </Link>
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

      </div>
    </div>
  );
}

export default App;
