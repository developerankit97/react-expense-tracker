import PropTypes from 'prop-types';

function ExpenseItem({ items }) {
	if (items.length === 0) {
		return <h2>No Expenses</h2>;
	}
	return (
		<div>
			{items.map((item) => (
				<h2 key={item.price}>{`${item.item} Rs ${item.price}`}</h2>
			))}
		</div>
	);
}

ExpenseItem.defaultProps = {
	items: [],
};

ExpenseItem.propTypes = {
	items: PropTypes.array,
};

export default ExpenseItem;
