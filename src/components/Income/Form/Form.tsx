import React, { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useForm from 'hooks/useForm';
import { validate } from 'utilities';
import ShowErrors from './ShowErrors/ShowErrors';
import Input from './Input/Input';
import SubmitButton from './SubmitButton/SubmitButton';
import DayPicker from './DayPicker/DayPicker';

import { IncomeI } from 'utilities/income.interface'

import StyledForm from './Form.styles';

const IncomeForm: React.FC<{ incomes: IncomeI[], setIncomes: React.Dispatch<any> }> = ({ incomes, setIncomes }) => {
  const addIncome = useCallback(
    (formFields, setIsSubmitting) => {
      setIncomes([...incomes, { id: uuidv4(), ...formFields }]);
      setIsSubmitting(false);
    },
    [incomes, setIncomes]
  );

  const { formFields, errors, handleChange, handleSubmit } = useForm(
    addIncome,
    validate
  );

  const handleDayChange = (selectedDay = '', _: any, dayPickerInput: { getInput: () => { (): any; new(): any; value: string; }; }) => {
    const incomeDate = {
      date: selectedDay.toString(),
      formatted: dayPickerInput.getInput().value.trim(),
    };

    handleChange(null, incomeDate);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <ShowErrors errors={errors} />

      <Input
        type="text"
        name="description"
        placeholder="Income description"
        value={formFields.description}
        autoComplete="off"
        width="260"
        onChange={handleChange}
      />

      <Input
        type="number"
        name="amount"
        min="0"
        step="0.01"
        placeholder="Amount"
        value={formFields.amount}
        autoComplete="off"
        onChange={handleChange}
      />

      <DayPicker
        placeholder="Date"
        value={formFields.date.formatted || ''}
        onDayChange={handleDayChange}
      />

      <SubmitButton>Add income</SubmitButton>
    </StyledForm>
  );
};

export default IncomeForm;
