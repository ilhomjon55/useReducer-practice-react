import './App.css';
import { useReducer } from 'react';

const reducer = (state, action) => {
	if (action === 'danger' || action === 'warning' || action === 'success')
		return action;

	return state;
};

function App() {
	const [color, setColor] = useReducer(reducer, 'secondary');

	return (
		<>
			<div className='container my-5'>
				<div className='first form-group d-flex align-items-center'>
					<button
						className='btn btn-danger'
						value='danger'
						onClick={function (evt) {
							setTimeout(setColor(evt.target.value), 3000);
						}}>
						Switch
					</button>
					<button
						className='btn btn-warning mx-auto'
						value='warning'
						onClick={function (evt) {
							setTimeout(setColor(evt.target.value), 3000);
						}}>
						Switch
					</button>
					<button
						className='btn btn-success'
						value='success'
						onClick={function (evt) {
							setTimeout(setColor(evt.target.value), 3000);
						}}>
						Switch
					</button>
				</div>
				<div className='second form-group d-flex align-items-center'>
					<div className={`p-5 w-25 mr-2 rounded-lg bg-${color}`}></div>
				</div>
			</div>
		</>
	);
}

export default App;
