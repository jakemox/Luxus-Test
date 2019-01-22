import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { render } from 'react-dom';
import './index.css';
import './index.html';
import Home from './home/home.jsx';


class App extends React.Component {
  render() {
    return <Home />;
  }
}

render(<App />, document.querySelector('#app'));