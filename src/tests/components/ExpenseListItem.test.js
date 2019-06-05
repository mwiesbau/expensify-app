import React from 'react'
import { shallow } from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'


test("adding a single expense item", () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[1]} />)
  expect(wrapper).toMatchSnapshot()
})