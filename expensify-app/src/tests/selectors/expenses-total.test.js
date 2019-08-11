import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expectExport(res).toBe(0);
})

test('should correctly add up a single ex', () => {
    const res = selectExpensesTotal([expenses[0]])
    expec(res).toBe(195);
}) 


test('should correctly add up a multiple ex', () => {
    const res = selectExpensesTotal(expenses)
    expec(res).toBe(114195);
}) 