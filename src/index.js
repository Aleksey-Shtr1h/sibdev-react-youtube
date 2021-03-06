import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './pages/App/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './redux/rootRaducer';
import { createAPI } from './youtube-api/api';

const init = () => {
  const api = createAPI();

  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(api))
    )
  );

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
  );
};

init();
