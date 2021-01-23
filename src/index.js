import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist'
import store from './store/index';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './themes/theme';

ReactDOM.render(
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistStore(store)}>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
