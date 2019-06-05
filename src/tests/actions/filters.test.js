import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters'
import moment from 'moment'


test("setting start date", () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  })
})

test("setting end date", () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  })
})


test("setting text filter with no value", () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  })
})

test("setting text filter with value", () => {
  const action = setTextFilter("123abc")
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "123abc"
  })
})

test("Sorting by amount", () => {
  const action = sortByAmount()
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT"
  })
})

test("Sorting by date", () => {
  const action = sortByDate()
  expect(action).toEqual({
    type: "SORT_BY_DATE"
  })
})