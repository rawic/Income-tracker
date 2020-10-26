export const DATE_REGEX = /^(0?[1-9]{1}|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/\\-]\d{4}$/;

export const ERRORS = {
  AMOUNT_NUMBER: 'Amount must be a number',
  AMOUNT_REQUIRED: 'Amount is required',
  DATE_FORMAT: 'Date must be a valid date (DD/MM/YYYY)',
  DATE_REQUIRED: 'Date is required',
  DESCRIPTION_LENGTH: 'Description must be 5 or more characters',
  DESCRIPTION_REQUIRED: 'Description is required',
  NOT_AN_OBJECT: 'Passed parameter is not an object',
};
