import React from 'react'
import { Segment, Container, Header, Divider } from 'semantic-ui-react'

class Summary extends React.Component {
  componentDidMount() {
    document.title = "CPS 530 Project";
  };

  render() {
    return(
      <Segment basic>
        <Container textAlign="center">
          <Header as="h1">Summary of Frameworks</Header>
        </Container>
        <Divider/>
        <Container text>
          <Header as="h2">Front End: React with Semantic</Header>
          <Header as="h3">Popularity</Header>
          <Header as="h3">Strengths</Header>
          <Header as="h3">Weaknesses</Header>
          <Header as="h3">Who uses it</Header>
          <Divider/>
          <Header as="h2">Back End: Rails</Header>
          <Header as="h3">Popularity</Header>
          <Header as="h3">Strengths</Header>
          <Header as="h3">Weaknesses</Header>
          <Header as="h3">Who uses it</Header>
        </Container>
      </Segment>
    )
  }
}

export default Summary