import selectExpenses from '../../selectors'

const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: -1000
}, {
    id: '3',
    description: 'Credit card',
    note: '',
    amount: 4500,
    createdAt: 1000
}]

test('should test by text value', () => {
    const result = selectExpenses();
})