import './App.css';
import JournalItem from './components/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournaList from './components/JournaList/JournaList';
import JournaAddButton from './components/JournaAddButton/JournaAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import { useState } from 'react';

function App() {

	// return React.createElement('div', {}, React.createElement('h1', {}, 'Заголовок', React.createElement('div', {}, 'Начало проекта')));
	const INITIAL_DATA = [
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
	const [items, setItems] = useState(INITIAL_DATA);


	function addTodo(item) {
		setItems(oldItems=> [...oldItems, {
			...item,
			date: new Date(item.date)
		}]);
	}


	return (
		<div className='app'>
			<LeftPanel>
				<Header />
				<JournaAddButton />
				<JournaList>
					{items.map(el => (
						<CardButton >
							<JournalItem
								title={el.title}
								text={el.text}
								date={el.date}
							/>
						</CardButton>
					))}
				</JournaList>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addTodo}/>
			</Body>
		</div >
	);

}

export default App;
