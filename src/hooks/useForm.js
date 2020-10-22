import { useState, useEffect } from 'react';

const initialFormFieldsValues = {
  description: '',
  amount: 0,
  date: '',
}

const useForm = (callback, validate) => {
  const [formFields, setFormFields] = useState(initialFormFieldsValues);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(formFields, setIsSubmitting);
      setFormFields(initialFormFieldsValues);
    }
  }, [errors, callback, isSubmitting, formFields]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    setErrors(validate(formFields));
    setIsSubmitting(true);
  };

  const handleChange = (event, date) => {
    if (event) {
      event.persist();
      setFormFields((fields) => ({
        ...fields,
        [event.target.name]:
          event.target.type === 'number' ? parseFloat(event.target.value, 10) : event.target.value,
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
