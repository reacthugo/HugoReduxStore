import React from 'react';
import Header from './components/header';
import Routes from './routes';
import { Provider } from "react-redux";
import { Store } from "./redux/store";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
