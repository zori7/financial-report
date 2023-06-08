import {faker} from '@faker-js/faker'
import {endOfMonth, format, startOfMonth, subMonths} from 'date-fns'

const range = (len) => {
    const arr = []
    for (let i = 0; i < len; i++) {
        arr.push(i)
    }
    return arr
}

export const CATEGORY = {
    bank: 'bank',
    income: 'income',
    cogs: 'cogs',
    expense: 'expense'
}

const EXPENSE = {
    bankCharge: 'Bank Charge & Fees',
    legal: 'Legal Services',
    tax: 'Taxes & Licenses',
    software: 'Office Supplies & Software'
}

const expenses = Object.values(EXPENSE)

const newRow = (betweenMonths, {
    title,
    category
}) => {

    let valueRange

    let transactions = []

    switch (category) {
        case CATEGORY.bank:
            valueRange = {
                min: 1000,
                max: 15000
            }
            break
        case CATEGORY.income:
            valueRange = {
                min: 100,
                max: 3000
            }
            break
        case CATEGORY.expense:
            valueRange = {
                min: 10,
                max: 250
            }
            break
        default:
            valueRange = {
                min: 10,
                max: 1000
            }
    }

    if (category === CATEGORY.expense) {
        transactions = range(faker.number.int({
            min: 0,
            max: 4
        })).map(() => ({
            id: faker.string.uuid(),
            date: faker.date.between(betweenMonths),
            title: faker.word.noun(),
            description: faker.word.words(2),
            value: faker.number.float({
                ...valueRange,
                precision: 0.01
            })
        }))
    }

    let value

    if (category === CATEGORY.expense) {
        if (transactions.length){
            value = transactions.reduce((sum, t) => sum + t.value, 0)
        }
    } else {
        value = faker.helpers.maybe(() => faker.number.float({
            ...valueRange,
            precision: 0.01
        }), {probability: 0.8})
    }

    let item = {
        id: faker.string.uuid(),
        category,
        value,
        date: faker.date.between(betweenMonths),
        title
    }

    if (category === CATEGORY.expense) {
        item.transactions = transactions
    }

    return item
}

const makeDataLevel = (m, {
    banks,
    expenses,
    incomes,
    cogs
}) => {
    const betweenMonths = {
        from: startOfMonth(subMonths(new Date(), m)),
        to: endOfMonth(subMonths(new Date(), m))
    }

    return {
        [CATEGORY.bank]: banks.map((title) => newRow(betweenMonths, {
            title, category: CATEGORY.bank
        })),
        [CATEGORY.income]: incomes.map((title) => newRow(betweenMonths, {
            title, category: CATEGORY.income
        })),
        [CATEGORY.cogs]: cogs.map((title) => newRow(betweenMonths, {
            title, category: CATEGORY.cogs
        })),
        [CATEGORY.expense]: expenses.map((title) => newRow(betweenMonths, {
            title, category: CATEGORY.expense
        }))
    }
}

export function makeReportData(months = 3) {
    const banks = faker.helpers.uniqueArray(faker.word.words.bind(null, {
        count: {
            min: 2,
            max: 3
        }
    }), 2)

    const incomes = faker.helpers.uniqueArray(faker.word.words.bind(null, {
        count: {
            min: 2,
            max: 3
        }
    }), 3)

    const cogs = faker.helpers.uniqueArray(faker.word.words.bind(null, {
        count: {
            min: 2,
            max: 3
        }
    }), 2)

    return range(months).map((m) => ({
        month: format(subMonths(new Date(), m), 'yyyy-MM'),
        data: makeDataLevel(m, {
            banks,
            expenses,
            incomes,
            cogs
        })
    })).reverse()
}
