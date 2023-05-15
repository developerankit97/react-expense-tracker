/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
	const items = [
		{ item: 'Food', price: 10 },
		{ item: 'Petrol', price: 100 },
		{ item: 'Movies', price: 200 },
	];

	return (
		<div>
			<h2>Let's get started.</h2>
			<ExpenseItem items={items} />
		</div>
	);
}

export default App;
