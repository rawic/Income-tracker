import { useState, useEffect } from 'react';
import { ValidateI } from 'utilities/index.interface'

const initialFormFieldsValues = {
  description: '',
  amount: '',
  date: {
    date: '',
    formatted: ''
  }
};

const useForm = (callback: (...args: any[]) => any, validate: (n: ValidateI) => any) => {
  const [formFields, setFormFields] = useState(initialFormFieldsValues);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(formFields, setIsSubmitting);
      setFormFields(initialFormFieldsValues);
    }
  }, [errors, callback, isSubmitting, formFields]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();

    setErrors(validate(formFields));
    setIsSubmitting(true);
  };

  const handleChange = (event: React.FormEvent<HTMLFormElement> | null, date: { date: string, formatted: string }) => {
    if (event) {
      event.persist();
      const target = event.target as HTMLInputElement;
      setFormFields((fields) => ({
        ...fields,
        [target.name]:
          target.type === 'number' ? parseFloat(target.value) : target.value,
      }));
    } else {
      setFormFields((fields) => ({
        ...fields,
        date,
      }));
    }
  };

  return {
    handleChange,
    handleSubmit,
    formFields,
    errors,
    isSubmitting,
  };
};

export default useForm;
