export default interface DayPickerI {
  className?: string,
  onDayChange: (...args: any) => void,
  placeholder?: string,
  value: string
}