import React, { Component } from 'react'
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Segment,
} from 'semantic-ui-react'

class Page extends React.Component {
  componentDidMount(){
    document.title = "Sample Page"
  }

  render() {
    return (
      <Segment style={{ marginTop: 0, padding: '0em 0em' }}>
        <Segment
          inverted
          textAlign='center'
          style={{ minHeight: 700, padding: '1em 0em' }}
          vertical>
          <Container text>
            <Header
              as='h1'
              content='The Game Room'
              inverted
              style={{
                fontSize: '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: '3em',
              }}
            />
            <Header
              as='h2'
              content='Plenty of fun for everyone!'
              inverted
              style={{
                fontSize: '1.7em',
                fontWeight: 'normal',
                marginTop: '1.5em',
              }}
            />
            <Button primary size='huge'>
              Find Out More
                        <Icon name='right arrow' />
            </Button>
          </Container>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Throw an Unforgettable Party
                                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  From virtual reality, escape rooms, galaxy adventures and gaming parties! Hold unforgettable private events for the office or birthday of any age.
                                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Don't Know What to do Tonight?
                                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Forget the regular bar or club! What better way to spend a night out than interacting with friends, come check us out tonight!
                                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image bordered rounded size='large' src='http://res.cloudinary.com/redballoon/images/c_fill,f_auto,w_414,h_230/d4zgcedxapxqkfs73bjn/virtual-reality-rooms-sydney-game-inside-head-sets.jpeg' />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='huge'>Find a Location Near You</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Fun is 100% Guaranteed!
                                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Not one bad review ever left behind!
                                </p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  "The best Holiday party the office has had yet. Loads of fun and a great interactive atmosphere."
                                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  <Image avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy08cK8wogTcvUJYvty4hAPwvKxTIJEqneUkNc3r4CBLkroZyn' />
                  <b>Edward Charles</b> Chief Executive Officer Headline News
                                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>Locations</List.Item>
                    <List.Item as='a'>Our Mission</List.Item>
                    <List.Item as='a'>Our Vision</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Services' />
                  <List link inverted>
                    <List.Item as='a'>Virtual Reality</List.Item>
                    <List.Item as='a'>Gaming Room</List.Item>
                    <List.Item as='a'>Escape Missions</List.Item>
                    <List.Item as='a'>Galaxy Adventures</List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </Segment>
    )
  }
}

export default Page