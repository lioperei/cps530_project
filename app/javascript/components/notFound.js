import React from 'react'
import { Segment, Container, Header } from 'semantic-ui-react'

class NotFound extends React.Component {
  componentDidMount() {
    document.title = "404 Not Found";
  };

  render() {
    return (
      <Segment basic padded="very">
        <Container text textAlign="center">
          <Header as="h1">404 Page Not Found</Header>
          The page you are looking for does not exist
      </Container>
      </Segment>
    )
  }
}

export default NotFound