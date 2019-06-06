import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'

export const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'

  return (
    <h1>Viewing {expenseCount} {expenseWord} totalling {numeral(expensesTotal / 100).format("$0,0.00")}</h1>
  )
}


const mapStateToProps = (state) => {
  const selectedExpenses = selectExpenses(state.expenses, state.filters)
  return {
    expensesTotal: selectExpensesTotal(selectedExpenses),
    expenseCount: selectedExpenses.length
  }
}

export default connect(mapStateToProps)(ExpenseSummary)