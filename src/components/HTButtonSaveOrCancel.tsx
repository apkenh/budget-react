import { Button } from 'semantic-ui-react';

function HTButtonSaveOrCancel(props: any) {
  const { onResetInput, onAddEntry } = props;
  return (
    <Button.Group>
      <Button onClick={onResetInput}>Clear</Button>
      <Button.Or />
      <Button primary onClick={onAddEntry}>
        Add
      </Button>
    </Button.Group>
  );
}

export default HTButtonSaveOrCancel;
