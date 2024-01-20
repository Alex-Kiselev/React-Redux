import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useState } from 'react';


function JournalForm({ onSubmit }) {

	const [formValidState, setFormValidState] = useState({
		title: true,
		post: true,
		date: true
	});

	// const [inputData, setInputData] = useState('');
	// const [state, setState] = useState({
	// 	age: 31
	// });

	// const [state2, setState2] = useState([1,2,3]);
	// console.log('🚀 ~ JournalForm ~ state2:', state2);

	// const inputChange = (event) => {
	// 	setInputData(event.target.value);
	// };

	const addJournalItem = (e) => {
		e.preventDefault();
		// СБОР всех полей НО УЧТИ ЧТО formData будет пустым объектом его можно прочиттать и собрать с помощью
		// Object.fromEntries(formData);


		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);


		let isFormValid = true;
		if (!formProps.title?.trim().length) {
			setFormValidState(prevState => ({ ...prevState, title: false }));
			isFormValid = false;
		} else {
			setFormValidState(prevState => ({ ...prevState, title: true }));
		}
		if (!formProps.post?.trim().length) {
			setFormValidState(prevState => ({ ...prevState, post: false }));
			isFormValid = false;
		} else {
			setFormValidState(prevState => ({ ...prevState, post: true }));

		}
		if (!formProps.date) {
			setFormValidState(prevState => ({ ...prevState, date: false }));
			isFormValid = false;
		} else {
			setFormValidState(prevState => ({ ...prevState, date: true }));
		}
		if (!isFormValid) {
			return;
		}
		onSubmit(formProps);


		///////////////////////////////////////////////
		// Интересный подход и он работает
		// state2.push(4);
		// setState2([...state2]);
		// Объект
		// state.age = 150
		// setState({...state});
	};

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<input type='text' name='title' className={`${styles['input']} ${formValidState.title ? '' : styles['input']}`}/>
			<input type='date' name='date' className={`${styles['input']} ${formValidState.date ? '' : styles['input']}`}/>
			<input type='text' name='tag' />
			<textarea name="post" id="" cols="30" rows="10"  className={`${styles['input']} ${formValidState.post ? '' : styles['input']}`}/>
			<Button text="Сохранить" onClickCustom={() => {
				// console.log('Нажали');
			}} />
		</form>
	);
}


export default JournalForm;