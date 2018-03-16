import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Books from './Books';
import Navigation from './Navigation';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(<Navigation />, document.getElementById('navbar'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Books />, document.getElementById('books'));
registerServiceWorker();
