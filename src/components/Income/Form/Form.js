import React from 'react';
import useForm from 'hooks/useForm';
import validate from 'utilities/form-validation';
import Input from './Input/Input';
import SubmitButton from './SubmitButton/SubmitButton';
import DayPicker from './DayPicker/DayPicker';
import { Form } from './Form.styles';

const IncomeForm = ({ income, setIncome }) => {
  const { formFields, errors, handleChange, handleSubmit } = useForm(
    addIncome,
    validate
  );

  function addIncome() {
    setIncome([...income, formFields]);
  }

  const handleDayChange = (selectedDay, modifiers, { state: { value } }) => {
    handleChange(null, value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* TODO: Use portal to display errors in a toast message */}
      {/* {Object.entries(errors).map(([field, msg]) => (
        <p>
          {field}
          {msg}
        </p>
      ))} */}

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
