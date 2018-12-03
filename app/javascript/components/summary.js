import React from 'react'
import {
  Segment,
  Container,
  Header,
  Divider,
  List,
  Image
} from 'semantic-ui-react'

class Summary extends React.Component {
  componentDidMount() {
    document.title = "CPS 530 Project";
  };

  render() {
    return (
      <Segment basic>
        <Container textAlign="center">
          <Header as="h1">Summary of Frameworks</Header>
        </Container>
        <Divider />
        <Container text>
          <Container textAlign="center">
            <Header as="h2">Front End<br />React with Semantic</Header>
            <Image
              src="data:image/png;base64,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"
              size="large"
              centered
              spaced
            />
          </Container>
          <Divider hidden />
          <p>
            We chose to use React as our frontend Framework for our project.
            React is a JavaScript library which allows users to build interactive
            user interfaces.  Its ease of use and simplicity has gained allot of
            popularity since it was first introduced in 2013 by Jordan Walke, a
            software engineer at Facebook.  It is widely considered to be one of
            the most in demand used frameworks for building websites by new and
            experienced developers to date.
          </p>
          <Header as="h3">Some strengths of React are:</Header>
          <List>
            <List.Item icon="plus" content="JavaScript environment is dynamic" />
            <List.Item icon="plus" content="Can be used on multiple platforms (i.e. mobile apps)" />
            <List.Item icon="plus" content="Ability to build encapsulated components" />
          </List>
          <Header as="h3">Some weaknesses of React are:</Header>
          <List>
            <List.Item icon="minus" content="Rapid environment changes require developers to constantly be up to date" />
            <List.Item icon="minus" content="React uses JSX (syntax extension for protecting code) which some developers feel is complex due to its steep learning curve" />
            <List.Item icon="minus" content="Certain reports claim incompatibilities with Google's search engine" />
          </List>
          <Header as="h3">Some popular websites that use React:</Header>
          <List>
            <List.Item icon="checkmark box" content="Facebook" />
            <List.Item icon="checkmark box" content="Netflix" />
            <List.Item icon="checkmark box" content="AirBnB" />
            <List.Item icon="checkmark box" content="Dropbox" />
          </List>
        </Container>
        <Divider section hidden />
        <Container text>
          <Container textAlign="center">
            <Header as="h2">Back End<br />Ruby On Rails</Header>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg"
              centered
              size="large"
            />
          </Container>
          <Divider hidden />
          <p>
            For our backend, we decided to go with Ruby on Rails. Ruby on Rails
            is a development tool that allows developers to build a server side
            web application framework. Just as the name suggests Rails is written
            in Ruby. Developers range from new beginners all the way to experienced
            professionals as Ruby includes everything you need to build your own
            web applications.
          </p>
          <Header as="h3">Some strengths of Ruby on Rails are:</Header>
          <List>
            <List.Item icon="plus" content="Rapid environment changes require developers to constantly be up to date" />
            <List.Item icon="plus" content="React uses JSX (syntax extension for protecting code) which some developers feel is complex due to its steep learning curve" />
            <List.Item icon="plus" content="From a developer standpoint, is very flexible with changing requirements between projects" />
            <List.Item icon="plus" content="Rails libraries are open source unlike other frameworks" />
          </List>
          <Header as="h3">Some weaknesses of Ruby on Rails are:</Header>
          <List>
            <List.Item icon="minus" content="Not all website hosts might support Rails" />
            <List.Item icon="minus" content="Performance and scalability can be a factor at times" />
            <List.Item icon="minus" content="Not as many developers when compared to Java and PHP" />
          </List>
          <Header as="h3">Some popular websites that use Ruby on Rails:</Header>
          <List>
            <List.Item icon="checkmark box" content="Hulu" />
            <List.Item icon="checkmark box" content="GitHub" />
            <List.Item icon="checkmark box" content="Yellow Pages" />
            <List.Item icon="checkmark box" content="SoundCloud" />
          </List>
        </Container>
      </Segment>
    )
  }
}

export default Summary