import React, { useReducer } from 'react';
import Input from './Input/Input';
import SubmitButton from './SubmitButton/SubmitButton';
import DayPicker from './DayPicker/DayPicker';
import { Form } from './Form.styles';

const IncomeForm = ({ income, setIncome }) => {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      description: '',
      amount: '',
      date: '',
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInput({ [name]: value });
  };

  const handleDayChange = (selectedDay, modifiers, { state: { value } }) => {
    setUserInput({ date: value });
  };

  const addIncome = (e) => {
    e.preventDefault();

    setIncome([
      ...income,
      {
        description: userInput.description,
        date: userInput.date,
        amount: userInput.amount,
      },
    ]);

    setUserInput({
      description: '',
      date: '',
      amount: '',
    });
  };

  return (
    <Form onSubmit={addIncome}>
      <Input
        type="text"
        id="description"
        placeholder="Income description"
        value={userInput.description}
        onChange={handleChange}
        width="260"
      />

      <Input
        type="number"
        id="amount"
        placeholder="Amount"
        value={userInput.amount}
        onChange={handleChange}
      />

      <DayPicker
        onDayChange={handleDayChange}
        placeholder="Date"
        value={userInput.date}
      />

      <SubmitButton>Add income</SubmitButton>
    </Form>
  );
};

export default IncomeForm;
