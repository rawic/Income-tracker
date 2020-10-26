import { isEmptyObjectI, ValidateI, ErrorsI } from './index.interface';
import { DATE_REGEX, ERRORS } from './constants';

export const isEmptyObject = (obj: isEmptyObjectI): boolean => Object.keys(obj).length === 0;

export function formatPrice(price: number, options: object = { minimumFractionDigits: 2 }) {
  const formattedPrice = price.toLocaleString('de-DE', options);

  return formattedPrice;
}

export function validate(values: ValidateI) {
  const errors = {} as ErrorsI;

  if (!values.description) {
    errors.description = ERRORS.DESCRIPTION_REQUIRED;
  } else if (values.description.length < 5) {
    errors.description = ERRORS.DESCRIPTION_LENGTH;
  }

  if (!values.amount) {
    errors.amount = ERRORS.AMOUNT_REQUIRED;
  } else if (Number.isNaN(values.amount)) {
    errors.amount = ERRORS.AMOUNT_NUMBER;
  }

  if (!values.date.formatted) {
    errors.date = ERRORS.DATE_REQUIRED;
  } else if (!DATE_REGEX.test(values.date.formatted)) {
    errors.date = ERRORS.DATE_FORMAT;
  }

  return errors;
}

export const sortDateDesc = (a: any, b: any): number => Math.abs(new Date(b.date.date).getTime() - new Date(a.date.date).getTime());
