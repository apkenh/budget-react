import { Statistic } from 'semantic-ui-react';

function HTDisplayBalance(props: any) {
  const { size, title, balance, color } = props;
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label>{title}</Statistic.Label>
      <Statistic.Value>{balance}</Statistic.Value>
    </Statistic>
  );
}

export default HTDisplayBalance;
