import React from 'react';
import './some.d.ts'
import InputMask from "react-input-mask";
import './App.css';
import axios from 'axios';

function App() {

  const [email, setEmail] = React.useState('')
  const [number, setNumber] = React.useState('')
  const [users, setUsers] = React.useState<null | any[]>(null)
  const [error, setError] = React.useState<null | string>(null);

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const get_user = async ({ email, number }: any) => {
    const { data } = await axios.get('http://localhost:8000', {
      params: {
        email,
        number
      }
    })
    if (data.msg) {
      setError(data.msg)
    } else {
      setUsers(data)
    }


  }

  const handleChange = (event: any) => {
    setEmail(event.target.value);
  };

  const submit = () => {
    if (!isValidEmail(email)) {
      return setError('Email is invalid');
    } else {
      setError(null);
    }
    const info = {
      email,
      number
    }
    get_user(info)
  }


  return (
    < div className="App">
      <div className='container'>
        <div className='contain-form'>
          <div className='find'>Find user</div>
          <input type={'email'} placeholder="Enter email..." onChange={handleChange} />
          <InputMask mask="99-99-99" maskChar={null} value={number} onChange={(e: any) => setNumber(e.target.value)} placeholder="Enter number..." />
          {
            error
              ? <div className='error'>{error}</div>
              : null
          }
          <input className='submit' type="submit" value='Submit' onClick={() => submit()} disabled={!(email.length || number.length)} />
        </div>
        {
          users?.length
            ?
            <div className='contain-user'>
              <div>Users:</div>
              {
                users.map((user: any) => (
                  <div className='user-item'>
                    <div className='email'>Email: {user.email}</div>
                    {/* <div className='number'>Number: {user.number}</div> */}
                    <div className='number'>Number: {user.number.substring(0, 2) + '-' + user.number.substring(2, 4) + '-' + user.number.substring(4, 6)}</div>

                  </div>
                ))
              }
            </div>
            : null
        }
      </div>
    </div>
  );
}

export default App;
