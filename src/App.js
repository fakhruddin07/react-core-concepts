import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const tuitions = [
    { name: 'PolashBari', salary: '3000' },
    { name: 'KashemulerGoli', salary: '3000' },
    { name: 'TomsomBridge', salary: '5000' },
    { name: 'NobabBari', salary: '5000' },
    { name: 'DokkhinChortha', salary: '3500' },
  ]
  const friends = ['Tanni', 'Shipa', 'Popy', 'Azad', 'Meetho', 'Riaz', 'Shahjahan', 'Shohel', 'Nafiur', 'Shabuz']
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <h1>Tuition's list</h1>
        {
          tuitions.map(tuition => <li>{tuition.name}</li>)
        }
        <h1>Friends list</h1>
        {
          friends.map(friend => <li>{friend}</li>)
        }
        {
          tuitions.map(tuition => <Tuition tuition={tuition}></Tuition>)
        }
      </header>
    </div>
  );
}

function Users() {
  const [users, setUser] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])

  return (
    <div>
      <h1>Dynamic User : {users.length}</h1>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(count + 1)
  }
  const handleDecrease = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(count - 1);
    }
    else {
      alert('add numbers')
    }
  }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button style={{ marginLeft: '10px' }} onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

function Tuition(props) {
  const tuitionStyle = {
    border: '2px solid gray',
    borderRadius: '10px',
    height: '200px',
    width: '300px',
    margin: '10px'
  }
  const { name, salary } = props.tuition;
  return (
    <div style={tuitionStyle}>
      <h3>{name}</h3>
      <h5>{salary}</h5>
    </div>
  )
}
export default App;
