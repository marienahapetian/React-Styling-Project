import { useState } from 'react';
import { styled } from 'styled-components';
import Button from './Button';
import Input from './Input';

const ControlsDiv = styled.div`
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        `     

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlsDiv>
        <Input label="Email" invalid={emailNotValid} type="email" onChange={(event) =>
              handleInputChange('password', event.target.value)
            } />
        <Input label="Password" invalid={passwordNotValid} type="password" onChange={(event) =>
              handleInputChange('password', event.target.value)
            } />
      </ControlsDiv>

      <div className="actions">
        <Button type="button" $buttonType="text-button">
          Create a new account
        </Button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
