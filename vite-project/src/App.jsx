import './App.css';
import JournalItem from './components/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournaList from './components/JournaList/JournaList';
import JournaAddButton from './components/JournaAddButton/JournaAddButton';

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
					<CardButton>
						<JournalItem
							title={data[0].title}
							text={data[0].text}
							date={data[0].date}
						/>
					</CardButton>
					<CardButton>
						<JournalItem
							title={data[1].title}
							text={data[1].text}
							date={data[1].date}
						/>
					</CardButton>
				</JournaList>
			</LeftPanel>
			<Body>
				Body
			</Body>
		</div>
	);

}

export default App;
