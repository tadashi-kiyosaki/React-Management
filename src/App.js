import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'Li Guang',
  'birthday': '98126',
  'gender': 'Male',
  'job': 'Developer'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': 'Li Jin',
    'birthday': '9012',
    'gender': 'Male',
    'job': 'Engineer'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': 'Indiago',
    'birthday': '8912',
    'gender': 'Male',
    'job': 'Manager'
    }
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })
      }
    </div>
  );
}

export default App;
