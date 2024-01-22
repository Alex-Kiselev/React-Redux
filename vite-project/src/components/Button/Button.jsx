import './Button.css';

function Button({ text, onClick }) {

	// let text = 'Сохранить';
	// const [text, setText] = useState('Сохранить');
	// console.log('РЕРЕНДЕР');

	// const clicked = () => {
	// text = 'Закрыть';
	// setText('Закрыть'); Меняем значение на новое
	// setText(prev => prev + '!!!'); Изменение состояние относительно предыдущего состояния

	//1 использовать данный подход если значение не зависит от предыдущего состояния!
	// setText('Закрыть'); 

	//2 использовать если данный подход ЕСЛИ значение Зависит от предыдущего состояния!
	// setText(prev => {
	// 	prev = 'Закрыть';
	// 	return prev;
	// }); 
	// };
	return (
		<button className='button accent' onClick={onClick}>{text}</button>
	);
}

export default Button;