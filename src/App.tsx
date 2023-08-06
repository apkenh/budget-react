import './App.css';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';

import HTBalanceGroup from './components/HTBalanceGroup';
import HTDisplayBalance from './components/HTDisplayBalance';
import HTEntryLine from './components/HTEntryLine';
import HTForm from './components/HTForm';
import HTHeader from './components/HTHeader';

function App() {
  const [entries, setEntries] = useState(initialEntry);

  useEffect(() => {
    axios.get('http://192.168.50.15:8080/spending').then((response) => {
      setEntries(response.data);
    });
  }, []);

  function deleteEntry(id: number) {
    const result = entries.filter((e) => e.id !== id);
    setEntries(result);
  }

  function addEntry(desc: string, amount: number, expense: boolean) {
    const result = entries.concat({
      id: entries.length + 1,
      desc,
      amount,
      expense,
    });
    setEntries(result);
  }

  return (
    <Container>
      <HTHeader title='Budget' type='h1' />
      <HTDisplayBalance size='small' title='Your Balance:' balance='2,550.53' color='black' />
      <HTBalanceGroup />

      <HTHeader title='Add new transaction' type='h3' />
      <HTForm onAddEntry={addEntry} />

      <HTHeader title='History' type='h3' />
      {entries.length > 0 && entries.map((entry) => <HTEntryLine key={entry.id} {...entry} onDeleteEntry={deleteEntry} />)}
      <HTHeader title='End' type='h3' />
    </Container>
  );
}

export default App;

const initialEntry = [
  {
    id: 0,
    desc: '',
    amount: 0,
    expense: false,
  },
];
