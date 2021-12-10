import logo from './logo.svg';
import './App.css';
import Main from "./Main.jsx"
import { AppRoute } from "./CONST.js"
import Realization from "./Realization.jsx"
import TestCase from "./TestCase.jsx"
import TechTask from "./TechTask.jsx"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState, useReducer } from 'react';

import { DataContext, initialState, dataReducer } from "./DataReducer"

function App() {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={{ dispatch, state }}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="/"
        >
          <h1>
            Задача коллективного владения
          </h1>
        </a>
        <a
          className="App-link"
          href="https://github.com/Egor18032019/testovoeBitWorks"
          target="_blank"
          rel="noopener noreferrer"
        >
          Репозиторий
        </a>
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path={AppRoute.ROOT} element={<Main />} />
            <Route path={AppRoute.REALIZATION} element={<Realization />} />
            <Route path={AppRoute.TECHTASK} element={<TestCase />} />
            <Route path={AppRoute.TESTCASE} element={<TechTask />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div >
    </DataContext.Provider>
  );
}

export default App;
