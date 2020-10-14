import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [formFields, setFormFields] = useState({
    description: '',
    amount: '',
    date: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(formFields));
    setIsSubmitting(true);
  };

  const handleChange = (event, day) => {
    if (event) {
      event.persist();
      setFormFields((fields) => ({
        ...fields,
        [event.target.name]: event.target.value,
      }));
    } else {
      setFormFields((fields) => ({
        ...fields,
        date: day,
      }));
    }
  };

  return {
    handleChange,
    handleSubmit,
    formFields,
    errors,
  };
};

export default useForm;
