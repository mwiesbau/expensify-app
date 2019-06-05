import { addExpense, editExpense, removeExpense } from '../../actions/expenses'


test('remove an expense', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test("editing expense", () => {
  const update = {
    id: "123abc",
    description: 'test',
    note: 'testNote',
    amount: 100
  }
  const action = editExpense("123abc", update)

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: update
  })

})

test("should setup add expense object with provided values", () => {
  const expenseData = {
    description: "rent",
    amount: 109500,
    createdAt: 1000,
    note: "this was a test rent"
  }

  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })

})

test('should setup add expense with defaults', () => {
  const expenseData = {
    description: "",
    amount: 0,
    createdAt: 0,
    note: ""
  }

  const action = addExpense()

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})