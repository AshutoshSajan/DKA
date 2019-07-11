import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

import './src/scss/index.scss'
import store from './store';
import Wrapper from './Wrapper';
import App from './src/containers/App';



ReactDOM.render(
  <Wrapper>
    <App /> 
  </Wrapper>
  ,
  document.getElementById('root')
);


  