import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseSummary } from '../../components/ExpenseSummary'
import expenses from '../fixtures/expenses'

test("viewing 1 expense", () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={2.54} />)
  expect(wrapper).toMatchSnapshot()
})


test("viewing 2 expense", () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={2} expensesTotal={16.60} />)
  expect(wrapper).toMatchSnapshot()
})