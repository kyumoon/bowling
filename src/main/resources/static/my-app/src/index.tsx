import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Route, Router } from "react-router";
import ScoreBoard from "./components/ScoreBoard";
import createBrowserHistory from "history/createBrowserHistory";
import App from "./App";

ReactDOM.render(
            (<Router history={createBrowserHistory()}>
                <div>
                <Route path={'/'} compoent{...App}>
                    <Route path={'/Score'} compoent{...ScoreBoard}></Route>
                </Route>
                </div>
            </Router>),
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
