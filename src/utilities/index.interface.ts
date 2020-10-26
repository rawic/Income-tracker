interface DateI {
  date: Date,
  formatted: string
}

export interface ValidateI {
  description: string, 
  amount: string,
  date: {
    date: Date,
    formatted: string
  }
}

export interface ErrorsI {
  description: string
  amount: string,
  date: string
}