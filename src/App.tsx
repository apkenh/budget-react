import './App.css';

import { Container } from 'semantic-ui-react';

import HTBalanceGroup from './components/HTBalanceGroup';
import HTDisplayBalance from './components/HTDisplayBalance';
import HTEntryLine from './components/HTEntryLine';
import HTForm from './components/HTForm';
import HTHeader from './components/HTHeader';

function App() {
  return (
    <Container>
      <HTHeader title='Budget' type='h1' />
      <HTDisplayBalance size='small' title='Your Balance:' balance='2,550.53' color='black' />
      <HTBalanceGroup />
      <HTHeader title='History' type='h3' />
      <HTEntryLine desc='Something' amount='$10,00' isExpense />
      <HTEntryLine desc='Something else' amount='$1000,00' />
      <HTEntryLine desc='Something' amount='$20,00' isExpense />
      <HTHeader title='Add new transaction' type='h3' />
      <HTForm />
    </Container>
  );
}

export default App;
