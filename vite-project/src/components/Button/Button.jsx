import { useState } from 'react';
import './Button.css';


function Button() {
	// let text = 'Сохранить';
	const [text, setText] = useState('Сохранить');
	console.log('РЕРЕНДЕР');

	const clicked = () => {
		// text = 'Закрыть';
		// setText('Закрыть'); Меняем значение на новое
		// setText(prev => prev + '!!!'); Изменение состояние относительно предыдущего состояния
		setText(prev => prev + '!!!'); 
	};

	return (
		<button
			onClick={clicked}
			className="button accent"
		>
			{text}
		</button>
	);
}

export default Button;