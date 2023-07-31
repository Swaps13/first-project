

import './ExpenseItem.css';

function ExpenseItem() {
const ExpenseDate= new Date(2023,7,20);
const Expensetitle='Car Insuarance';
const ExpenseAmount =250.90
  return(
  <div>
    <div className="expense-item">{ExpenseDate.toISOString()}
    <div className="expense-item__description">
      <h2>{Expensetitle}</h2>
      <div className="expense-item__price">${ExpenseAmount}</div>
      </div>
    </div>
  </div>);
}

export default ExpenseItem;
