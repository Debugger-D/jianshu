import React from 'react';
import { GlobalStyle} from './style'
import Header from './common/header/'
import store from './store'
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App dell">
        <GlobalStyle />
        <Header />
      </div>
    </Provider>
  );
}

export default App;
