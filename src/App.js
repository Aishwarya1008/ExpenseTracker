import { useState } from "react";
import ExpenseItemList from "./components/Expenses/ExpenseItemList";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2023, 1, 14),
  },
  { id: "e2", 
    title: "New TV", 
    amount: 799.49, 
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expensesList, setExpensesList] = useState(DUMMY_EXPENSES);

  const addingExpenseHandler = (newExpense) => {
      setExpensesList((prevState) => {
        return [newExpense, ...prevState];
      })
  }



  return (
    <div>
      <NewExpense onAddingExpense={addingExpenseHandler}/>
      <ExpenseItemList expenses={expensesList}/>
    </div>
  );
}

export default App;
