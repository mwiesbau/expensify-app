import filtersReducer from '../../reducers/filters'
import moment from 'moment'


const defaultState = {
  text: "",
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: "@@INIT" })
  expect(state).toEqual(defaultState)
})

test('should set sort by to amount', () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" })
  expect(state).toEqual({
    ...defaultState,
    sortBy: 'amount'
  })
})


test('should set sort by to date', () => {
  const state = filtersReducer({ ...defaultState, sortBy: 'amount' }, { type: "SORT_BY_DATE" })
  expect(state).toEqual({
    ...defaultState,
    sortBy: 'date'
  })
})


test('should set text filer', () => {
  const state = filtersReducer(undefined, { type: "SET_TEXT_FILTER", text: "testFilterText" })
  expect(state).toEqual({
    ...defaultState,
    text: "testFilterText"
  })
})

test("should set start date filter", () => {
  const state = filtersReducer(undefined, { type: "SET_START_DATE", startDate: moment(10000) })

  expect(state).toEqual({
    ...defaultState,
    startDate: moment(10000)
  })
})


test("should set end date filter", () => {
  const state = filtersReducer(undefined, { type: "SET_END_DATE", endDate: moment(10000) })

  expect(state).toEqual({
    ...defaultState,
    endDate: moment(10000)
  })
})