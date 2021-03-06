import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" })
  expect(state).toEqual([])
});


test("removing expense with valid id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: '2'
  };
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
});

test("should not remove expenses if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: '-1'
  };
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
});

test('adding expense', () => {
  const newExpense = {
    id: '10',
    description: 'new Expense',
    note: '',
    amount: 1000,
    createdAt: 0
  }

  const action = {
    type: "ADD_EXPENSE",
    expense: newExpense
  }

  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, newExpense])
})


test("editing expense with existing id", () => {
  const updates = {
    note: 'new note',
  }

  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: updates
  }

  const state = expensesReducer(expenses, action)
  expect(state[1].note).toBe("new note")

})

