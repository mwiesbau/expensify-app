

const selectExpensesTotal = (expenses) => {
  const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0)
  return totalAmount
}

export default selectExpensesTotal