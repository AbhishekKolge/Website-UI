import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import UseValidate from '../../hooks/use-validate';

import PrimaryWrapper from '../UI/PrimaryWrapper/PrimaryWrapper';

import styles from './ContactForm.module.css';

const firstNameRegex = new RegExp(/^[a-zA-Z]+$/);
const lastNameRegex = new RegExp(/^[a-zA-Z]+$/);
const numberRegex = new RegExp(
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
);
const emailRegex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$/);

const validateFirstName = (value) => {
  return firstNameRegex.test(value.trim());
};

const validateLastName = (value) => {
  return lastNameRegex.test(value.trim());
};

const validateNumber = (value) => {
  return numberRegex.test(value.trim());
};

const validateEmail = (value) => {
  return emailRegex.test(value.trim());
};

const validateMessage = (value) => {
  return value.trim().length > 0;
};

const ContactForm = () => {
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const {
    inputValue: firstNameInputValue,
    inputTouched: firstNameInputTouched,
    inputIsValid: inputFirstNameIsValid,
    inputIsEmpty: inputFirstNameIsEmpty,
    InputChangeHandler: firstNameInputChangeHandler,
    touched: firstNameTouched,
    reset: resetFirstName,
  } = UseValidate(validateFirstName);
  const {
    inputValue: lastNameInputValue,
    inputTouched: lastNameInputTouched,
    inputIsValid: inputLastNameIsValid,
    inputIsEmpty: inputLastNameIsEmpty,
    InputChangeHandler: lastNameInputChangeHandler,
    touched: lastNameTouched,
    reset: resetLastName,
  } = UseValidate(validateLastName);
  const {
    inputValue: numberInputValue,
    inputTouched: numberInputTouched,
    inputIsValid: inputNumberIsValid,
    inputIsEmpty: inputNumberIsEmpty,
    InputChangeHandler: numberInputChangeHandler,
    touched: numberTouched,
    reset: resetNumber,
  } = UseValidate(validateNumber);
  const {
    inputValue: emailInputValue,
    inputTouched: emailInputTouched,
    inputIsValid: inputEmailIsValid,
    inputIsEmpty: inputEmailIsEmpty,
    InputChangeHandler: emailInputChangeHandler,
    touched: emailTouched,
    reset: resetEmail,
  } = UseValidate(validateEmail);
  const {
    inputValue: messageInputValue,
    inputTouched: messageInputTouched,
    inputIsValid: inputMessageIsValid,
    inputIsEmpty: inputMessageIsEmpty,
    InputChangeHandler: messageInputChangeHandler,
    touched: messageTouched,
    reset: resetMessage,
  } = UseValidate(validateMessage);

  const formIsValid =
    inputFirstNameIsValid &&
    inputLastNameIsValid &&
    inputNumberIsValid &&
    inputEmailIsValid &&
    inputMessageIsValid;

  const submitHandler = (e) => {
    e.preventDefault();
    firstNameTouched();
    lastNameTouched();
    numberTouched();
    emailTouched();
    messageTouched();
    if (!formIsValid) {
      return;
    }

    const request = async () => {
      try {
        const response = await fetch(
          'https://assignment-contact-form-ae7a1-default-rtdb.firebaseio.com/messages.json',
          {
            method: 'POST',
            body: JSON.stringify({
              firstName: firstNameInputValue,
              lastName: lastNameInputValue,
              mobile: numberInputValue,
              email: emailInputValue,
              message: messageInputValue,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.status !== 200) {
          throw new Error('Could not place order. Please try again.');
        }
        resetFirstName();
        resetLastName();
        resetNumber();
        resetEmail();
        resetMessage();
        setSuccessMsg(true);
        setTimeout(() => {
          setSuccessMsg(false);
        }, 3000);
      } catch (error) {
        setErrorMsg(true);
        setTimeout(() => {
          setErrorMsg(false);
        }, 3000);
      }
    };

    request();
  };

  const firstNameError = !inputFirstNameIsValid && firstNameInputTouched;
  const lastNameError = !inputLastNameIsValid && lastNameInputTouched;
  const numberError = !inputNumberIsValid && numberInputTouched;
  const emailError = !inputEmailIsValid && emailInputTouched;
  const messageError = !inputMessageIsValid && messageInputTouched;

  let firstNameErrorMessage;
  let lastNameErrorMessage;
  let numberErrorMessage;
  let emailErrorMessage;
  let messageErrorMessage;

  firstNameErrorMessage = inputFirstNameIsEmpty ? 'Required' : 'Invalid';
  lastNameErrorMessage = inputLastNameIsEmpty ? 'Required' : 'Invalid';
  numberErrorMessage = inputNumberIsEmpty ? 'Required' : 'Invalid';
  emailErrorMessage = inputEmailIsEmpty ? 'Required' : 'Invalid';
  messageErrorMessage = inputMessageIsEmpty ? 'Required' : 'Invalid';

  return (
    <section className={styles.section}>
      <PrimaryWrapper className={styles.wrapper}>
        <form onSubmit={submitHandler} noValidate className={styles.form}>
          <div className={styles.control}>
            <label className={styles.label} htmlFor='firstName'>
              First Name
            </label>
            <input
              value={firstNameInputValue}
              onChange={firstNameInputChangeHandler}
              className={`${firstNameError && styles.invalid} ${styles.input}`}
              id='firstName'
              type='text'
            />
            {firstNameError && (
              <p className={styles.error}>{firstNameErrorMessage}</p>
            )}
          </div>
          <div className={styles.control}>
            <label className={styles.label} htmlFor='lastName'>
              Last Name
            </label>
            <input
              value={lastNameInputValue}
              onChange={lastNameInputChangeHandler}
              className={`${lastNameError && styles.invalid} ${styles.input}`}
              id='lastName'
              type='text'
            />
            {lastNameError && (
              <p className={styles.error}>{lastNameErrorMessage}</p>
            )}
          </div>
          <div className={styles.control}>
            <label className={styles.label} htmlFor='mobileNumber'>
              Mobile Number
            </label>
            <input
              value={numberInputValue}
              onChange={numberInputChangeHandler}
              className={`${numberError && styles.invalid} ${styles.input}`}
              id='mobileNumber'
              type='number'
            />
            {numberError && (
              <p className={styles.error}>{numberErrorMessage}</p>
            )}
          </div>
          <div className={styles.control}>
            <label className={styles.label} htmlFor='emailId'>
              Email Id
            </label>
            <input
              value={emailInputValue}
              onChange={emailInputChangeHandler}
              className={`${emailError && styles.invalid} ${styles.input}`}
              id='emailId'
              type='email'
            />
            {emailError && <p className={styles.error}>{emailErrorMessage}</p>}
          </div>
          <div className={styles.control}>
            <label className={styles.label} htmlFor='message'>
              Message
            </label>
            <textarea
              value={messageInputValue}
              onChange={messageInputChangeHandler}
              className={`${messageError && styles.invalid} ${styles.input}`}
              id='message'
            ></textarea>
            {messageError && (
              <p className={styles.error}>{messageErrorMessage}</p>
            )}
          </div>
          <button className={styles.action}>Submit</button>
        </form>
        <AnimatePresence>
          {successMsg && (
            <motion.div
              initial={{ opacity: 0, y: -30, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: -30, x: '-50%' }}
              className={styles['success__msg']}
            >
              Message Sent!
            </motion.div>
          )}
          {errorMsg && (
            <motion.div
              initial={{ opacity: 0, y: -30, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: -30, x: '-50%' }}
              className={styles['error__msg']}
            >
              Error Occured!
            </motion.div>
          )}
        </AnimatePresence>
      </PrimaryWrapper>
    </section>
  );
};

export default ContactForm;
