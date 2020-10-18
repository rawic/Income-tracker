import React from 'react';
import useForm from 'hooks/useForm';
import ShowErrors from './ShowErrors/ShowErrors';
import Input from './Input/Input';
import SubmitButton from './SubmitButton/SubmitButton';
import DayPicker from './DayPicker/DayPicker';

import { Form } from './Form.styles';
import { validate } from 'utilities';

const IncomeForm = ({ income, setIncome }) => {
  const {
    formFields,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useForm(addIncome, validate);

  function addIncome() {
    setIncome([...income, formFields]);
  }

  const handleDayChange = (selectedDay, modifiers, dayPickerInput) =>
    handleChange(null, dayPickerInput.getInput().value);

  return (
    <Form onSubmit={handleSubmit}>
      <ShowErrors errors={errors} isSubmitting={isSubmitting} />

      <Input
        type="text"
        id="description"
        placeholder="Income description"
        value={formFields.description}
        onChange={handleChange}
        width="260"
      />

      <Input
        type="number"
        id="amount"
        placeholder="Amount"
        value={formFields.amount}
        min="0"
        onChange={handleChange}
      />

      <DayPicker
        onDayChange={handleDayChange}
        placeholder="Date"
        value={formFields.date}
      />

      <SubmitButton>Add income</SubmitButton>
    </Form>
  );
};

export default IncomeForm;
