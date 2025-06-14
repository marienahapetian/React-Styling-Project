import { useState } from 'react';
import Button from './Button';
import Input from './Input';


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
    <div id="auth-inputs" className='w-full py-4 px-8 mx-auto max-w-sm rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800'>
      <div className="flex flex-col gap-2 mb-6">
        <Input label="Email" invalid={emailNotValid} type="email" onChange={(event) =>
              handleInputChange('password', event.target.value)
            } />
        <Input label="Password" invalid={passwordNotValid} type="password" onChange={(event) =>
              handleInputChange('password', event.target.value)
            } />
      </div>

      <div className="flex justify-end gap-4">
        <Button type="button" className="text-amber-400 text-sm hover:text-amber-500">
          Create a new account
        </Button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
