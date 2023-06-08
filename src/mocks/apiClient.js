import {makeReportData} from "./makeReportData";
import {format} from 'date-fns'

const apiClient = {
    financialReport: null,
    getFinancialReport(months) {
        if (!this.financialReport) {
            this.financialReport = makeReportData(months)
        }

        return this.financialReport
    },
    updateTransactionType(t, type) {
        const data = this.financialReport.find(o => o.month === format(t.date, 'yyyy-MM'))

        if (!data) return false

        const oldType = data.data.expense.find(o => o.transactions.some(o => o.id === t.id))

        const newType = data.data.expense.find(o => o.title === type)

        oldType.transactions = oldType.transactions.filter(o => o.id !== t.id)

        newType.transactions = [...newType.transactions, t]

        oldType.value = oldType.transactions.length ? oldType.transactions.reduce((sum, t) => sum + t.value, 0) : undefined
        newType.value = newType.transactions.length ? newType.transactions.reduce((sum, t) => sum + t.value, 0) : undefined
    }
}

export default apiClient
