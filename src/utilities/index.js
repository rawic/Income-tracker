import { DATE_REGEX } from './constants';

export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export function formatPrice(price, options = {}) {
  options.minimumFractionDigits = 2;

  const formattedPrice = price.toLocaleString('de-DE', options);

  return formattedPrice;
}

export function validate(values) {
  let errors = {};

  if (!values.description) {
    errors.description = 'Description is required';
  } else if (values.description.length < 5) {
    errors.description = 'Description must be 5 or more characters';
  }
  if (!values.amount) {
    errors.amount = 'Amount is required';
  } else if (isNaN(values.amount)) {
    errors.amount = 'Amount must be a number';
  }
  if (!values.date.formatted) {
    errors.date = 'Date is required';
  } else if (!values.date.formatted.match(DATE_REGEX)) {
    errors.date = 'Date must be a valid date (DD/MM/YYYY)';
  }
  return errors;
}

export const sortDateDesc = (a, b) =>
  new Date(b.date.date) - new Date(a.date.date);
