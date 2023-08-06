import { useState } from 'react';
import { Form } from 'semantic-ui-react';

import HTButtonSaveOrCancel from './HTButtonSaveOrCancel';
import HTEntryForm from './HTEntryForm';

function HTForm(props: any) {
  const { onAddEntry } = props;
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState(0);
  const [expense, setExpense] = useState(false);

  function onResetInput() {
    setDesc('');
    setAmount(0);
    setExpense(false);
  }

  return (
    <Form unstackable>
      <HTEntryForm desc={desc} setDesc={setDesc} amount={amount} setAmount={setAmount} expense={expense} setExpense={setExpense} />
      <HTButtonSaveOrCancel onResetInput={onResetInput} onAddEntry={() => onAddEntry(desc, amount, expense)} />
    </Form>
  );
}

export default HTForm;
