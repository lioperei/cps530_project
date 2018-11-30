import React from 'react'
import { Segment, Header, Container, Image } from 'semantic-ui-react'

class Installation extends React.Component {
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
        <div>
          <Header as="h2">Rails</Header>
          <Container>
            The included droplet comes with a running example using <b>Rails 5</b> and <b>Ruby 2.5.1</b> which 
            is the same version as what is used in our app.<br></br>
            To install the dependencies of our project we had to install the gem <b>bundler</b>.
             Which installs all the gems located in the file <b>Gemfile</b><br></br>
             <Segment secondary>
              <b>gem install bundler</b><br></br>
              <b>bundle install</b>
            </Segment>
          </Container>
        </div>        
      </div>
    )
  }
}

export default Installation