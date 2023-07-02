import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Component/Header';
import DestinationIndex from './Component/Destinations/DestinationIndex';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Header/>
    <DestinationIndex/>
    </Provider>
  </React.StrictMode>
);

