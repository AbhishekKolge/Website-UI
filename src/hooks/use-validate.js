import { useState } from 'react';

const UseValidate = (validate) => {
  const [inputValue, setInputValue] = useState('');
  const [inputTouched, setInputTouched] = useState(false);

  const inputIsValid = validate(inputValue);
  const inputIsEmpty = inputValue.trim().length < 1;

  const touched = () => {
    setInputTouched(true);
  };

  const InputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const reset = () => {
    setInputTouched(false);
    setInputValue('');
  };

  return {
    inputValue,
    inputTouched,
    inputIsValid,
    inputIsEmpty,
    InputChangeHandler,
    touched,
    reset,
  };
};

export default UseValidate;
