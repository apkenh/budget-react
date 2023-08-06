import { Fragment } from 'react';
import { Checkbox, Form } from 'semantic-ui-react';

function HTEntryForm(props: any) {
  const { desc, setDesc, amount, setAmount, expense, setExpense } = props;
  return (
    <Fragment>
      <Form.Group>
        <Form.Input icon='tags' width={12} label='Description' placeholder='New shinny thing' value={desc} onChange={(e) => setDesc(e.target.value)} />
        <Form.Input icon='dollar' iconPosition='left' width={4} label='Value' placeholder='100.00' value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      </Form.Group>
      <Form.Field>
        <Checkbox label='Is expense' checked={expense} onChange={() => setExpense(!expense)} />
      </Form.Field>
    </Fragment>
  );
}

export default HTEntryForm;
