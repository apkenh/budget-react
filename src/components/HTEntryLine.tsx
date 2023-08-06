import { Grid, Icon, Segment } from 'semantic-ui-react';

function HTEntryLine(props: any) {
  const { desc, amount, isExpense } = props;
  return (
    <Segment color={isExpense ? 'red' : 'green'}>
      <Grid columns={3} textAlign='right'>
        <Grid.Row>
          <Grid.Column width={10} textAlign='left'>
            {desc}
          </Grid.Column>
          <Grid.Column width={3}>{amount}</Grid.Column>
          <Grid.Column width={3}>
            <Icon name='edit' bordered />
            <Icon name='trash' bordered />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default HTEntryLine;
