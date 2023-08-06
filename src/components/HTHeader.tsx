import { Header } from 'semantic-ui-react';

function HTHeader(props: any) {
  const { title, type } = props;
  return <Header as={type}>{title}</Header>;
}

export default HTHeader;
