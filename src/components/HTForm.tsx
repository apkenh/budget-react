import { Form } from 'semantic-ui-react';

import HTButtonSaveOrCancel from './HTButtonSaveOrCancel';

function HTForm() {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input icon='tags' width={12} label='Description' placeholder='New shinny thing' />
        <Form.Input icon='dollar' iconPosition='left' width={4} label='Value' placeholder='100.00' />
      </Form.Group>
      <HTButtonSaveOrCancel />
    </Form>
  );
}

export default HTForm;
