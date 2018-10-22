import * as React from 'react';
import './App.css';
import ScoreBoard from "./components/ScoreBoard";
import Navigation from "./components/Navigation";
import scoreStore from './store/ScoreStore';
import {Provider} from "mobx-react";

// import logo from './logo.svg';

class App extends React.Component {

  public render() {
      return (
      <div className="App">
        <Navigation/>
          <Provider store={scoreStore}>
            <ScoreBoard/>{/*추후 라우터로 변경*/}
          </Provider>
      </div>
    );
  }
}

export default App;
