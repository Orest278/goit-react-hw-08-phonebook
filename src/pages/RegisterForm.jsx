import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import MUI from 'components/MUI';
import s from './style.module.css'



export default function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.registerDiv}>
      <h1>Page of registration</h1>

      <form onSubmit={handleSubmit} className={s.registerForm} autoComplete="off">
        <label className={s.registerLabel}>
          <MUI.TextField
            className={s.register}
            label="Name"
            placeholder="Please enter your name"
            focused
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className={s.registerLabel}>
          <MUI.TextField
            className={s.register}
            label="Email"
            placeholder="Please enter your email"
            focused
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={s.registerLabel}> 
          <MUI.TextField
            className={s.register}
            label="Password"
            focused
            placeholder="Please enter your password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <MUI.Button variant="contained" type="submit">
          Register
        </MUI.Button>
      </form>
    </div>
  );
}