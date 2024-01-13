// import React from 'react';
import './App.css';
import JournalItem from './components/JournalItem/JournalItem';
import Button from './components/Button/Button';
// import Declarative36 from './lessons/Declarative36';
// import ReactFragment35 from './lessons/ReactFragment35';

function App() {

  // return React.createElement('div', {}, React.createElement('h1', {}, 'Заголовок', React.createElement('div', {}, 'Начало проекта')));

  return (
    <>
      {/* <Declarative36/> */}
      {/* <ReactFragment35/> */}
      <h1>Загаловок</h1>
      <p>Начало проект</p>
      <Button />
      <JournalItem />
    </>
  );

}

export default App;
