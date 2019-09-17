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
  const categoryId = props.match.params.id;
  const category = navLinksData.find(category => category.id.toString() === categoryId);
  if (!category.subLink) {
    return null;
  } else {
    return (
      <>
        {
          category.subLink.map(sublink => {
            return (
              <div className='sub-link'>
                <div>
                  <img src={sublink.imageUrl} alt='#' />
                </div>
                <p>{sublink.title}</p>
              </div>
            );
          })
        }
      </>
    );
  }
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
