import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'


test("total expenses for empty array", () => {
  const total = selectExpensesTotal([])
  expect(total).toBe(0)
})

test("single expense should return correct value", () => {
  const total = selectExpensesTotal([expenses[0]])
  expect(total).toBe(195)
})

test("all expenses should return correct amount", () => {
  const total = selectExpensesTotal(expenses)
  expect(total).toBe(114195)
})
