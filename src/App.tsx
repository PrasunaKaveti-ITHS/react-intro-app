import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent'
import ToggleMode from './components/ToggleMode'
import HiddenText from './components/HiddenText'
import ReactToThis from './components/ReactToThis'
import Settings from './components/Settings'
import Menu from './components/Menu'
import Count from './components/Count'

function App() {
  let message = 'Hello';
  message += 'world!'
  return (
    <div className="App">
      <header className="App-header">
        {message}
       <MyComponent />
       <Count />
       <ToggleMode />
       <HiddenText />
       <ReactToThis />
       <Settings />
       <Menu />
      </header>
    </div>
  );
}

export default App;
