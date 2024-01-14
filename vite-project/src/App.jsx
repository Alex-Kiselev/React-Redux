// import React from 'react';
import './App.css';
import JournalItem from './components/JournalItem/JournalItem';
import Button from './components/Button/Button';
// import Declarative36 from './lessons/Declarative36';
// import ReactFragment35 from './lessons/ReactFragment35';

function App() {

  // return React.createElement('div', {}, React.createElement('h1', {}, 'Заголовок', React.createElement('div', {}, 'Начало проекта')));
  const data = [
    {
      title: 'Подготовка к обновлению курсов',
      date: new Date(),
      text: 'Горные походы открывают удивительные природные ландшафты'
    },
    {
      title: 'Поход в годы',
      date: new Date(),
      text: 'Думал, что очень много времени'
    }
  ];

  return (
    <>
      {/* <Declarative36/> */}
      {/* <ReactFragment35/> */}
      <h1>Загаловок</h1>
      <p>Начало проект</p>
      <Button />
      <JournalItem 
        title={data[0].title}
        text={data[0].text}
        date={data[0].date}
      />
    </>
  );

}

export default App;
