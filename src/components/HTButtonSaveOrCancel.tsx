import { Button } from 'semantic-ui-react';

function HTButtonSaveOrCancel() {
  return (
    <Button.Group>
      <Button>Cancel</Button>
      <Button.Or />
      <Button primary>OK</Button>
    </Button.Group>
  );
}

export default HTButtonSaveOrCancel;
