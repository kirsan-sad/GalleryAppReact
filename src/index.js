import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import SimpleReactLightbox from 'simple-react-lightbox';


ReactDOM.render(
    <BrowserRouter>
      <Provider store = {store}>
        <SimpleReactLightbox>
          <App />
        </SimpleReactLightbox>
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);
