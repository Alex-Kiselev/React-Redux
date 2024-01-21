import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import './JournaList.css';


function JournaList({ items }) {

	if (items.length === 0) {
		<p>Записей нет, добавьте первую запись</p>;
	}

	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}

	};

	// 2- подход разноса логика
	return <div className="journal-list">
		{items.sort(sortItems).map(el => (
			<CardButton key={el.id}>
				<JournalItem
					title={el.title}
					text={el.text}
					post={el.post}
					date={el.date}
				/>
			</CardButton>
		))}
	</div>;
}



export default JournaList;