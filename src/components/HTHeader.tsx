import { Divider, Header } from 'semantic-ui-react';

function HTHeader(props: any) {
  const { title, type } = props;
  return (
    <Divider horizontal>
      <Header as={type}>{title}</Header>
    </Divider>
  );
}

export default HTHeader;
