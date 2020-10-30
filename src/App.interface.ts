import { IncomeI } from 'utilities/income.interface'

export default interface AppI {
  storedValue: IncomeI[],
  setStoredValue: React.Dispatch<any>
}