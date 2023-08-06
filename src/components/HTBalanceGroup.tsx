import { Grid, Segment } from 'semantic-ui-react';

import HTDisplayBalance from './HTDisplayBalance';

function HTBalanceGroup(props: any) {
  const { totalIncome, totalExpense } = props;
  return (
    <Segment textAlign='center'>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <HTDisplayBalance size='tiny' title='Incoming:' balance={totalIncome} color='green' />
          </Grid.Column>
          <Grid.Column>
            <HTDisplayBalance size='tiny' title='Expense:' balance={totalExpense} color='red' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default HTBalanceGroup;
