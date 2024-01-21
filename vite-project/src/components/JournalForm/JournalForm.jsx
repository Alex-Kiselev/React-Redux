import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useEffect, useReducer } from 'react';
import cn from 'classnames';
import { INITIAL_STATE, formReducer } from './state/JournalForm.state';

function JournalForm({ onSubmit }) {

	// const INITIAL_STATE = {
	// 	title: true,
	// 	post: true,
	// 	date: true
	// };
	// const [formValidState, setFormValidState] = useState(INITIAL_STATE);

	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formState;


	useEffect(() => {
		// console.log('Монтирование');
		let timerId;
		if (!isValid.title || !isValid.post || !isValid.date) {
			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET_VALIDITY' });

				// setFormValidState(INITIAL_STATE);
			}, 2000);
		}
		// console.log('🚀 ~ Присваемаем ID таймеру чтобы потом удалить:', timerId);

		return () => {
			// console.log('Размантирование, очистка');
			clearTimeout(timerId);
		};


		//Как происходит размантирование и очистка и монтирование
		// Сначала происходит Монтирование компонента, далее происходит очистка 1 открытие компонента
		// Мы нажали на добавление у нас сработал эффект НО ОН СНАЧААЛА ЗАЙДЕТ В ОЧИСТКУ ЭФФЕКТА А ПОТОМ БУДЕТ ТОЛЬКО ВЫПОЛНЯТЬ ПОСТРОЧНЫЙ КОД СВЕРХУ ВНИЗ

	}, [isValid]);


	useEffect(() => {
		if (isFormReadyToSubmit) {
			onSubmit(values);
		}

	}, [isFormReadyToSubmit]);



	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		// let isFormValid = true;
		// if (!formProps.title?.trim().length) {
		// 	setFormValidState(state => ({ ...state, title: false }));
		// 	isFormValid = false;
		// } else {
		// 	setFormValidState(state => ({ ...state, title: true }));
		// }
		// if (!formProps.post?.trim().length) {
		// 	setFormValidState(state => ({ ...state, post: false }));
		// 	isFormValid = false;
		// } else {
		// 	setFormValidState(state => ({ ...state, post: true }));
		// }
		// if (!formProps.date) {
		// 	setFormValidState(state => ({ ...state, date: false }));
		// 	isFormValid = false;
		// } else {
		// 	setFormValidState(state => ({ ...state, date: true }));
		// }
		// if (!isFormValid) {
		// 	return;
		// }



		dispatchForm({ type: 'SUBMIT', payload: formProps });
	};

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<div>
				<input type='text' name='title' className={cn(styles['input-title'], {
					[styles['invalid']]: !isValid.title
				})} />
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="date" className={styles['form-label']}>
					<img src='/calendar.svg' alt='Иконка календаря' />
					<span>Дата</span>
				</label>
				<input type='date' name='date' id="date" className={cn(styles['input'], {
					[styles['invalid']]: !isValid.date
				})} />
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="tag" className={styles['form-label']}>
					<img src='/folder.svg' alt='Иконка папки' />
					<span>Метки</span>
				</label>
				<input type='text' id="tag" name='tag' className={styles['input']} />
			</div>

			<textarea name="post" id="" cols="30" rows="10" className={cn(styles['input'], {
				[styles['invalid']]: !isValid.post
			})}></textarea>
			<Button text="Сохранить" />
		</form>
	);
}

export default JournalForm;