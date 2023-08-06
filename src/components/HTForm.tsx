import { useState } from 'react';
import { Checkbox, Form } from 'semantic-ui-react';

import HTButtonSaveOrCancel from './HTButtonSaveOrCancel';

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
      <Form.Group>
        <Form.Input icon='tags' width={12} label='Description' placeholder='New shinny thing' value={desc} onChange={(e) => setDesc(e.target.value)} />
        <Form.Input icon='dollar' iconPosition='left' width={4} label='Value' placeholder='100.00' value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      </Form.Group>
      <Form.Field>
        <Checkbox label='Is expense' checked={expense} onChange={() => setExpense(!expense)} />
      </Form.Field>

      <HTButtonSaveOrCancel onResetInput={onResetInput} onAddEntry={() => onAddEntry(desc, amount, expense)} />
    </Form>
  );
}

export default HTForm;
