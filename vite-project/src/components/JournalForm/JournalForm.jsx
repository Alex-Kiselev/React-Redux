import { useState } from 'react';
import './JournalForm.css';
import Button from '../Button/Button';


function JournalForm() {
	const [inputData, setInputData] = useState('');

	const inputChange = (event) => {
		setInputData(event.target.value);
	};

	const addJournalItem = (e) => {
		e.preventDefault();
		// СБОР всех полей НО УЧТИ ЧТО formData будет пустым объектом его можно прочиттать и собрать с помощью
		// Object.fromEntries(formData);
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
	};

	return (
		<form className='journal-form' onSubmit={addJournalItem}>
			<input type='text' name='title' />
			<input type='date' name='date' />
			<input value={inputData} type='tag' name='text' onChange={inputChange} />
			<textarea name="" id="" cols="30" rows="10"></textarea>
			<Button text="Сохранить" onClickCustom={() => {
				// console.log('Нажали');
			}} />
		</form>
	);
}


export default JournalForm;