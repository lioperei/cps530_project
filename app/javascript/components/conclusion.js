import React from 'react'
import { Segment, Header, Container, Icon, Divider } from 'semantic-ui-react'

class Conclusion extends React.Component {
  componentDidMount(){
    document.title = "Conclusion"
  }

  render() {
    return (
      <Segment basic>
        <Container textAlign="center"><Header as="h1">Conclusions</Header></Container>
        <Container text>
          Overall the React/Rails framework performed to our expectations. We had previously experimented with using React 
          and Django as our backend of choice however we encountered issues when configuring our app on our local devices.
          With Rails and React we were able to to install it on our Unix and Mac OS devices easily as Ruby, Rails and Node 
          have great support on these platforms. We did however have issue installing Rails with the proper dependencies on
          a Windows machine. Since we had experience installing the app on a Ubuntu machine we were able to easily configure
          the app on DigitalOcean<br/><br/>

          Using the template page and setup provided by the Rails app
        </Container>
        <Divider />
        <Segment textAlign="center" basic>
          <Header as="h3">Rating</Header>
          <Icon.Group size="large" as="segment">
            <Icon name="star" />
            <Icon name="star" />
            <Icon name="star" />
            <Icon name="star" />
            <Icon name="star" />
          </Icon.Group>
        </Segment>
      </Segment>
    )
  }
}

export default Conclusion