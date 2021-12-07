import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

import reducer, { initialState } from '../reducers/index';

import {addOne} from '../actions/index.js';
import {applyNumber} from '../actions/index.js';
import {changeOperation} from '../actions/index.js';
import {clearDisplay} from '../actions/index.js';
import {memoryStore} from '../actions/index.js';
import {memoryReturn} from '../actions/index.js';
import {memoryClear} from '../actions/index.js';


function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  console.log(state);
  const onClick1 = () => {
    dispatch(addOne());
  }
  const onClick2 = (event) => {
    dispatch(applyNumber(parseInt(event.target.value)));
  }
  const onClick3 = (event) => {
    dispatch(changeOperation(event.target.value));
  }
  const onClick4 = () => {
    dispatch(clearDisplay());
  }
  const onClick5 = () => {
    dispatch(memoryStore());
  }
  const onClick6 = () => {
    dispatch(memoryReturn());
  }
  const onClick7 = () => {
    dispatch(memoryClear());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation} </span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={onClick5} value={"M+"}/>
              <CalcButton onClick={onClick6} value={"MR"}/>
              <CalcButton onClick={onClick7} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={onClick2} value={1}/>
              <CalcButton onClick={onClick2} value={2}/>
              <CalcButton onClick={onClick2} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={onClick2} value={4}/>
              <CalcButton onClick={onClick2} value={5}/>
              <CalcButton onClick={onClick2} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={onClick2} value={7}/>
              <CalcButton onClick={onClick2} value={8}/>
              <CalcButton onClick={onClick2} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={onClick3} value={"+"}/>
              <CalcButton onClick={onClick3} value={"*"}/>
              <CalcButton onClick={onClick3} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={onClick4} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
