import './App.css';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';

import HTBalanceGroup from './components/HTBalanceGroup';
import HTDisplayBalance from './components/HTDisplayBalance';
import HTEntryLine from './components/HTEntryLine';
import HTForm from './components/HTForm';
import HTHeader from './components/HTHeader';
import HTModalEdit from './components/HTModalEdit';

function App() {
  const [entries, setEntries] = useState(initialEntry);
  const [isModelOpen, setIsModelOpen] = useState(false);

  const [id, setId] = useState(-1);
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState(0);
  const [expense, setExpense] = useState(false);

  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [netBalance, setNetBalance] = useState(0);

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
      expense
    });
    setEntries(result);
  }

  function editEntry(id: number) {
    const idx = entries.findIndex((e) => e.id === id);

    setId(id);
    setDesc(entries[idx].desc);
    setAmount(entries[idx].amount);
    setExpense(entries[idx].expense);

    showModal(true);
  }

  function showModal(isOpen: boolean) {
    setIsModelOpen(isOpen);
  }

  useEffect(() => {
    if (!isModelOpen && id > 0) {
      const idx = entries.findIndex((e) => e.id === id);
      const result = [...entries];

      result[idx].desc = desc;
      result[idx].amount = amount;
      result[idx].expense = expense;

      setEntries(result);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModelOpen]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    entries.map((e) => {
      if (e.expense) {
        return (totalExpense += e.amount);
      } else {
        return (totalIncome += e.amount);
      }
    });
    setTotalIncome(totalIncome);
    setTotalExpense(totalExpense);
    setNetBalance(totalIncome - totalExpense);
  }, [entries]);

  return (
    <Container>
      <HTHeader title='Budget' type='h1' />
      <HTDisplayBalance size='small' title='Your Balance:' balance={netBalance} color='black' />
      <HTBalanceGroup totalIncome={totalIncome} totalExpense={totalExpense} />

      <HTHeader title='Add new transaction' type='h3' />
      <HTForm onAddEntry={addEntry} />

      <HTHeader title='History' type='h3' />
      {entries.length > 0 && entries.map((entry) => <HTEntryLine key={entry.id} {...entry} onDeleteEntry={deleteEntry} onEditEntry={editEntry} />)}
      <HTHeader title='End' type='h3' />
      <HTModalEdit isOpen={isModelOpen} showModal={showModal} desc={desc} setDesc={setDesc} amount={amount} setAmount={setAmount} expense={expense} setExpense={setExpense} />
    </Container>
  );
}

export default App;

const initialEntry = [
  {
    id: 0,
    desc: '',
    amount: 0,
    expense: false
  }
];
