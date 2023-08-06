import { Grid, Icon, Segment } from 'semantic-ui-react';

function HTEntryLine(props: any) {
  const { id, desc, amount, expense, onDeleteEntry } = props;
  return (
    <Segment color={expense === true ? 'red' : 'green'}>
      <Grid columns={3} textAlign='right'>
        <Grid.Row>
          <Grid.Column width={10} textAlign='left'>
            {desc}
          </Grid.Column>
          <Grid.Column width={3}>{amount.toFixed(2)}</Grid.Column>
          <Grid.Column width={3}>
            <Icon name='edit' bordered />
            <Icon name='trash' bordered onClick={() => onDeleteEntry(id)} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default HTEntryLine;
