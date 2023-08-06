import { Grid, Segment } from 'semantic-ui-react';

import HTDisplayBalance from './HTDisplayBalance';

function HTBalanceGroup() {
  return (
    <Segment textAlign='center'>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <HTDisplayBalance size='tiny' title='Incoming:' balance='1,045.56' color='green' />
          </Grid.Column>
          <Grid.Column>
            <HTDisplayBalance size='tiny' title='Expense:' balance='623.50' color='red' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default HTBalanceGroup;
