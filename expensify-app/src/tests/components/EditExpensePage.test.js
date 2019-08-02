import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let wrapper, history, editExpense, removeExpense

beforeEach(() => {
     history = {push: jest.fn()}
     editExpense = jest.fn()
     removeExpense = jest.fn()
     wrapper = shallow(<EditExpensePage 
                            history={history} 
                            editExpense={editExpense} 
                            removeExpense={removeExpense}
                            expense={expenses[2]}
                        />)
})

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle editExpensePage', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
})

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[2].id})
})