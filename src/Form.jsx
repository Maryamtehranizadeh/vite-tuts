import { useState } from 'react';

function Form() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    role: 'user',
    gender: 'female',
    rule: false,
  });

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(form);
  };

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === 'rule') {
      setForm((form) => ({ ...form, [name]: !form.rule }));
    } else {
      setForm((form) => ({ ...form, [name]: value }));
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <select value={form.role} name="role" onChange={changeHandler}>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="writer">Writer</option>
        </select>
        <input
          type="text"
          placeholder="Your Email"
          value={form.email}
          name="email"
          onChange={changeHandler}
        />
        <input
          type="password"
          placeholder="Your Password"
          value={form.password}
          name="password"
          onChange={changeHandler}
        />

        <div>
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            onChange={changeHandler}
          />
          <label htmlFor="female">female</label>
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            onChange={changeHandler}
            checked={form.gender === 'female'}
          />
          <label htmlFor="other">Other</label>
          <input
            type="radio"
            name="gender"
            id="other"
            value="other"
            onChange={changeHandler}
          />
          <input
            type="checkbox"
            name="rule"
            checked={form.rule}
            onChange={changeHandler}
          />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
