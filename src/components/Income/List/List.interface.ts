import { IncomeI } from 'utilities/income.interface'

export default interface ListI {
  incomes: IncomeI[],
  setIncomes: (n: IncomeI[]) => void
}