import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={event => event.target.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16)} />
  </div>,
  document.getElementById('root')
);
