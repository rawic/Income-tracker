export default interface InputI {
  type: string,
  name?: string | undefined,
  min?: string,
  step?: string,
  placeholder?: string | undefined,
  value?: string | number | undefined,
  autoComplete?: string | undefined,
  width?: string | undefined,
  onChange?: (...args: any[]) => void | undefined,
}