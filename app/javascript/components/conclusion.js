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
        <Divider/>
        <Container text>
          Overall the React/Rails framework performed to our expectations. We had previously experimented with using React
          and Django as our backend of choice however we encountered issues when configuring our app on our local devices.
          With Rails and React we were able to to install it on our Unix and Mac OS devices easily as Ruby, Rails and Node
          have great support on these platforms. We did however have issue installing Rails with the proper dependencies on
          a Windows machine. Since we had experience installing the app on a Ubuntu machine we were able to easily configure
          the app on DigitalOcean<br/><br/>

          Using the template page and setup provided by the Rails app and the documentation for Sementic we
          We able to easily create page components for our site.<br/><br/>

          Compared to regular HTML/CSS/Javascript the learning curve was non existent. On the backend
          there was not any configuration required besides creating the template via Rails. On the front 
          end the documentation and examples available on the Semantic React site provided clear examples 
          that did not need require advanced knowledge of Javascript. Styling was made easy as the provided
          props for the React Semantic component made styling easy.<br/><br/>

          We did not have anything that we would change regarding choosing our frameworks and implementing
           it. The Rails/React framework allowed us to create a simple yet stylistic web page application
            that has the capabilities to be extended to meet various functionality down that road.

        </Container>
        <Divider hidden/>
        <Segment textAlign="center"  compact secondary style={{margin: 'auto'}}>
          <Header as="h3">Overall Rating Out Of 5</Header>
          <Icon.Group size="large" as="div">
            <Icon name="star" color="yellow"/>
            <Icon name="star" color="yellow"/>
            <Icon name="star" color="yellow"/>
            <Icon name="star" color="yellow"/>
            <Icon name="star" color="yellow"/>
          </Icon.Group>
        </Segment>
      </Segment>
    )
  }
}

export default Conclusion