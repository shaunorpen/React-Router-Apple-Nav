import React from 'react';
import './css/App.css';

import navLinksData from './data';

function CreateLinks (props) {
  return (
    <div className='link'>
      {props.name}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className='links'>
        {
          navLinksData.map(link => <CreateLinks name={link.title} key={link.id} />)
        }
      </div>
      <div className='sub-links'>
        
      </div>
    </div>
  );
}

export default App;
