import './App.css';
import JournalItem from './components/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournaList from './components/JournaList/JournaList';
import JournaAddButton from './components/JournaAddButton/JournaAddButton';
import JournalForm from './components/JournalForm/JournalForm';

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
		<div className='app'>
			<LeftPanel>
				<Header />
				<JournaAddButton />
				<JournaList>
					{data.map(el => (
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
				<JournalForm />
			</Body>
		</div >
	);

}

export default App;
