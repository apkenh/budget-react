import { Button, Form, Modal } from 'semantic-ui-react';

import HTEntryForm from './HTEntryForm';

function HTModalEdit(props: any) {
  const { isOpen, showModal, desc, setDesc, amount, setAmount, expense, setExpense } = props;

  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <Form unstackable>
          <HTEntryForm desc={desc} setDesc={setDesc} amount={amount} setAmount={setAmount} expense={expense} setExpense={setExpense} />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => showModal(false)}>Close</Button>
        <Button onClick={() => showModal(false)} primary>
          OK
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default HTModalEdit;
