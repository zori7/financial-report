import {useEffect, useMemo, useState} from 'react'
import apiClient from '../../mocks/apiClient'
import CaretRight from '../../icons/CaretRight'
import {CATEGORY} from '../../mocks/makeReportData'
import Sidebar from '../Sidebar'
import {formatShort} from '../../utils/common'
import ExpenseBox from '../ExpenseBox'
import {
    Button,
    Caption,
    RowInnerCell,
    RowInnerContent,
    RowInnerTitleContent,
    TableCell,
    TableContainer,
    TableRow,
    Wrapper
} from './styledComponents'
import {format, parse} from 'date-fns'

const getAggregation = (data, category) => {
    const filtered = data[category]

    const sum = filtered.reduce((sum, o) => sum + (o.value || 0), 0)

    return {
        data: filtered,
        sum: isNaN(sum) ? 0 : sum
    }
}

const ReportTable = () => {
    const [reportData, setReportData] = useState()
    const [sidebarData, setSidebarData] = useState(null)

    const [isBankExpanded, setIsBankExpanded] = useState(false)
    const [isExpenseExpanded, setIsExpenseExpanded] = useState(false)
    const [isIncomeExpanded, setIsIncomeExpanded] = useState(false)
    const [isCogsExpanded, setIsCogsExpanded] = useState(false)

    const fetchData = () => {
        const data = apiClient.getFinancialReport(6)

        setReportData(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const toggleBankExpanded = () => {
        setIsBankExpanded((val) => !val)
    }

    const toggleExpenseExpanded = () => {
        setIsExpenseExpanded((val) => !val)
    }

    const toggleIncomeExpanded = () => {
        setIsIncomeExpanded((val) => !val)
    }

    const toggleCogsExpanded = () => {
        setIsCogsExpanded((val) => !val)
    }

    const aggregation = useMemo(() => {
        if (!reportData) return []

        return reportData.map((m) => ({
            bank: getAggregation(m.data, CATEGORY.bank),
            income: getAggregation(m.data, CATEGORY.income),
            cogs: getAggregation(m.data, CATEGORY.cogs),
            expense: getAggregation(m.data, CATEGORY.expense),
            month: m.month
        }))
    }, [reportData])

    const aggregationTitles = useMemo(() => {
        if (!reportData) return []

        const data = reportData[0].data

        return {
            bank: getAggregation(data, CATEGORY.bank).data.map(o => o.title),
            income: getAggregation(data, CATEGORY.income).data.map(o => o.title),
            cogs: getAggregation(data, CATEGORY.cogs).data.map(o => o.title),
            expense: getAggregation(data, CATEGORY.expense).data.map(o => o.title)
        }
    }, [reportData])

    const onCloseSidebar = () => {
        setSidebarData(null)
    }

    const updateTransactionType = (t, type) => {
        onCloseSidebar()
        apiClient.updateTransactionType(t, type)

        fetchData()
    }

    return (
        <Wrapper $isSidebarOpen={!!sidebarData}>
            {reportData && (
                <TableContainer>
                    <TableRow>
                        <TableCell><h3>Financial Report</h3></TableCell>
                        {reportData.map((v) => (
                            <TableCell key={v.month}>
                                <Caption>Actual</Caption>
                                <p>{format(parse(v.month, 'yyyy-MM', new Date()), 'MMM yyyy')}</p>
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Button onClick={toggleBankExpanded}
                                    $isExpanded={isBankExpanded}><CaretRight/> Banks</Button>
                            <RowInnerTitleContent $isVisible={isBankExpanded}>
                                {aggregationTitles.bank.map(title => (
                                    <RowInnerCell key={title}>{title}</RowInnerCell>
                                ))}
                            </RowInnerTitleContent>
                        </TableCell>
                        {aggregation.map((agg) => (
                            <TableCell key={agg.month}>
                                <RowInnerContent $isVisible={isBankExpanded}>
                                    {agg.bank.data.map((v) => {
                                        return (
                                            <RowInnerCell key={v.id}>
                                                {formatShort(v.value)}
                                            </RowInnerCell>
                                        )
                                    })}
                                </RowInnerContent>
                                <RowInnerCell $isSum>
                                    {formatShort(agg.bank.sum)}
                                </RowInnerCell>
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Button onClick={toggleIncomeExpanded}
                                    $isExpanded={isIncomeExpanded}><CaretRight/> Income</Button>
                            <RowInnerTitleContent $isVisible={isIncomeExpanded}>
                                {aggregationTitles.income.map(title => (
                                    <RowInnerCell key={title}>{title}</RowInnerCell>
                                ))}
                            </RowInnerTitleContent>
                        </TableCell>
                        {aggregation.map((agg) => (
                            <TableCell key={agg.month}>
                                <RowInnerContent $isVisible={isIncomeExpanded}>
                                    {agg.income.data.map((v) => {
                                        return (
                                            <RowInnerCell key={v.id}>
                                                {formatShort(v.value)}
                                            </RowInnerCell>
                                        )
                                    })}
                                </RowInnerContent>
                                <RowInnerCell $isSum>
                                    {formatShort(agg.income.sum)}
                                </RowInnerCell>
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Button onClick={toggleCogsExpanded} $isExpanded={isCogsExpanded}><CaretRight/> Cost Of
                                Goods Sold</Button>
                            <RowInnerTitleContent $isVisible={isCogsExpanded}>
                                {aggregationTitles.cogs.map(title => (
                                    <RowInnerCell key={title}>{title}</RowInnerCell>
                                ))}
                            </RowInnerTitleContent>
                        </TableCell>
                        {aggregation.map((agg) => (
                            <TableCell key={agg.month}>
                                <RowInnerContent $isVisible={isCogsExpanded}>
                                    {agg.cogs.data.map((v) => {
                                        return (
                                            <RowInnerCell key={v.id}>
                                                {v.value !== 0 && formatShort(v.value)}
                                            </RowInnerCell>
                                        )
                                    })}
                                </RowInnerContent>
                                <RowInnerCell $isSum>
                                    {formatShort(agg.cogs.sum)}
                                </RowInnerCell>
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow $highlighted>
                        <TableCell>Gross Profit</TableCell>
                        {aggregation.map((agg) => {
                            const profit = agg.income.sum - agg.cogs.sum

                            return (
                                <TableCell key={agg.month}>
                                    {formatShort(profit)}
                                </TableCell>
                            )
                        })}
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Button onClick={toggleExpenseExpanded}
                                    $isExpanded={isExpenseExpanded}><CaretRight/> Expenses</Button>
                            <RowInnerTitleContent $isVisible={isExpenseExpanded}>
                                {aggregationTitles.expense.map(title => (
                                    <RowInnerCell key={title}>{title}</RowInnerCell>
                                ))}
                            </RowInnerTitleContent>
                        </TableCell>
                        {aggregation.map((agg) => (
                            <TableCell key={agg.month}>
                                <RowInnerContent $isVisible={isExpenseExpanded}>
                                    {agg.expense.data.map((v, i) => {
                                        const type = aggregationTitles.expense[i]

                                        return (
                                            <RowInnerCell key={v.id} onClick={!!v.value ? (() => {
                                                setSidebarData(v)
                                            }) : undefined}>
                                                <ExpenseBox month={agg.month}
                                                            onDrop={(t) => updateTransactionType(t, type)}>
                                                    {!!v.value && `-${formatShort(v.value)}`}
                                                </ExpenseBox>
                                            </RowInnerCell>
                                        )
                                    })}
                                </RowInnerContent>
                                <RowInnerCell $isSum>
                                    {agg.expense.sum ? `-${formatShort(agg.expense.sum)}` : 0}
                                </RowInnerCell>
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow $highlighted>
                        <TableCell>Net Income</TableCell>
                        {aggregation.map((agg) => {
                            const profit = agg.income.sum - agg.cogs.sum

                            const income = profit - agg.expense.sum

                            return (
                                <TableCell key={agg.month}>
                                    {formatShort(income)}
                                </TableCell>
                            )
                        })}
                    </TableRow>
                </TableContainer>
            )}
            <Sidebar item={sidebarData} onClose={onCloseSidebar}/>
        </Wrapper>
    )
}

export default ReportTable
