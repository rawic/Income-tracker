import { DATE_REGEX, ERRORS } from './constants';

export function isEmptyObject(obj) {
  if (obj.constructor !== Object) {
    throw Error(ERRORS.NOT_AN_OBJECT);
  }

  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export function formatPrice(price, options = { minimumFractionDigits: 2 }) {
  const formattedPrice = price.toLocaleString('de-DE', options);

  return formattedPrice;
}

export function validate(values) {
  const errors = {};

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
  } else if (!values.date.formatted.match(DATE_REGEX)) {
    errors.date = ERRORS.DATE_FORMAT;
  }

  return errors;
}

export const sortDateDesc = (a, b) => new Date(b.date.date) - new Date(a.date.date);
