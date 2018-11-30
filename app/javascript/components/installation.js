import React from 'react'
import { Segment, Header, Container, Image, Divider } from 'semantic-ui-react'

class Installation extends React.Component {
  componentDidMount() {
    document.title = "Installation";
  };

  render() {
    return(
      <div>
        <Segment secondary>
          <Header as="h1">Installation of Rails React Project</Header>
          <Container >
            Our platform of choice was <a href="https://www.digitalocean.com/">DigitalOcean</a><br></br>
            DigitalOcean provides <b>Droplets</b> which are servers running <b>Ubuntu 18.04</b> with preconfigured setups.<br></br>
            We used the preconfigured <b>Ruby on Rails</b> One-click app
            <Image src="https://i.imgur.com/r8Hthlh.png" size="large"></Image>
          </Container>
        </Segment>
        <Divider></Divider>
        <div>
          <Header as="h2">Rails</Header>
          <Container>
            The included droplet comes with a running example using <b>Rails 5</b> and <b>Ruby 2.5.1</b> which 
            is the same version as what is used in our app.<br></br>
            To install the dependencies of our project we had to install the gem <b>bundler</b>.
             Which installs all the gems located in the file <b>Gemfile</b><br></br>
             <Segment secondary>
              <b>gem install bundler</b><br></br>
              
            </Segment>
          </Container>
        </div>
        <Divider></Divider>
        <div>
          <Header as="h2">React</Header>
          <Container>
            The included droplet did not included <b>yarn</b> which is a package manager for 
            node dependencies required for the React side of the application. We had to install yarn 
            for <b>Ubuntu 18.04</b>
             <Segment secondary>
              <b>curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -</b><br></br>
              <b>echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list</b><br></br>
              <b>sudo apt update</b><br></br>
              <b>sudo apt install yarn</b><br></br>
            </Segment>
          </Container> 
        </div>
        <Divider></Divider>
        <div>
          <Header as="h2">Starting and Running the app</Header>
          <Container>
            In order to start the application the code of our project was cloned into our droplet and dependencies
            were installed.
             <Segment secondary>
              #Ruby<br></br>
              <b>bundle install</b><br></br>
              #Node<br></br>
              <b>yarn</b><br></br>
            </Segment>
            Once dependencies were installed our app can be started with <b>Rails</b>.
            <Segment secondary>
              <b>rails s</b>
            </Segment>
          </Container> 
        </div>                
      </div>
    )
  }
}

export default Installation