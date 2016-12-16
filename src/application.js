import React from 'react';
import { render } from 'react-dom';

// Import reducers
import reducer from './reducers';

// Import components
import PhotoGrid from './components/PhotoGrid';

render(<PhotoGrid />, document.getElementById('app'));
