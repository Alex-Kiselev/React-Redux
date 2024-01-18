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
			id: 1,
			title: 'Подготовка к обновлению курсов',
			date: new Date(),
			text: 'Горные походы открывают удивительные природные ландшафты'
		},
		{
			id: 2,
			title: 'Поход в годы',
			date: new Date(),
			text: 'Думал, что очень много времени'
		}
	];
	const [items, setItems] = useState(INITIAL_DATA);
	console.log('🚀 ~ App ~ items:', items);


	const addTodo = (item) => {
		setItems(oldItems => [...oldItems, {
			id: Math.max(...oldItems.map(el => el.id)) + 1,
			title: item.title,
			date: new Date(item.date),
			text: item.text
		}]);
	};

	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}

	};


	return (
		<div className='app'>
			<LeftPanel>
				<Header />
				<JournaAddButton />
				<JournaList>
					{items.sort(sortItems).map(el => (
						<CardButton key={el.id}>
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
				<JournalForm onSubmit={addTodo} />
			</Body>
		</div >
	);

}

export default App;
