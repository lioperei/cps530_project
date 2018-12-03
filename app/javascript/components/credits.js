import React from 'react'
import { Link } from 'react-router-dom'
import {
  Icon,
  Image,
  Card,
  Header,
  Embed,
  Segment,
  Container,
  Divider,
  List
} from 'semantic-ui-react'

class References extends React.Component {
  componentDidMount(){
    document.title = "Credits"
  }
  
  render() {
    return (
      <Segment basic>
        <Container textAlign="center">
          <Header as="h2">Group Members</Header>
          <Card.Group centered stackable>
            <Card raised>
              <Image src='https://cdn.dribbble.com/users/622564/screenshots/3965400/letra_c.gif' />
              <Card.Content>
                <Card.Header>Chloe Ierullo</Card.Header>
                <Card.Meta><b>Student Number: </b>500684169</Card.Meta>
                <Card.Description>
                  Worked on developing <Link to="/page">the sample page</Link> as well 
                  as <Link to="/tutorial">the tutorial</Link> .
                </Card.Description>
              </Card.Content>
            </Card>
            <Card raised>
              <Image src='https://cdn.dribbble.com/users/332946/screenshots/3296132/n.gif' />
              <Card.Content>
                <Card.Header>Nem Jovanovic</Card.Header>
                <Card.Meta><b>Student Number: </b>042899377</Card.Meta>
                <Card.Description>
                  Conducted research into the <Link to="summary">stengths and weaknesses</Link> of the chosen frameworks
                </Card.Description>
              </Card.Content>
            </Card>
            <Card raised>
              <Image src='https://cdn.dribbble.com/users/1786756/screenshots/4559429/l_dr.gif' />
              <Card.Content>
                <Card.Header>Lionel Pereira</Card.Header>
                <Card.Meta><b>Student Number: </b>500510610</Card.Meta>
                <Card.Description>
                  Deployed our app to DigitalOcean and worked on the <Link to="/installation">Installation page</Link>.
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>
        <Divider />
        <Container text>
          <Header as="h2" style={{textAlign: "center"}}>References</Header>
          <List>
            <List.Item icon="angle right" content={<a>https://reactjs.org</a>} />
            <List.Item icon="angle right" content={<a>https://hackernoon.com/is-react-js-the-best-javascript-framework-in-2018-264a0eb373c8</a>} />
            <List.Item icon="angle right" content={<a>https://www.altexsoft.com/blog/engineering/the-good-and-the-bad-of-reactjs-and-react-native/</a>} />
            <List.Item icon="angle right" content={<a>https://www.quora.com/Why-is-ReactJS-so-popular</a>} />
            <List.Item icon="angle right" content={<a>https://zendev.com/2018/06/19/react-usage-beating-vue-angular.html</a>} />
            <List.Item icon="angle right" content={<a>https://www.telerik.com/blogs/5-benefits-of-reactjs-to-brighten-a-cloudy-day</a>} />
            <List.Item icon="angle right" content={<a>https://www.sourcetoad.com/app-development/the-benefits-of-using-react/</a>} />
            <List.Item icon="angle right" content={<a>https://en.wikipedia.org/wiki/React_(JavaScript_library)</a>} />
            <List.Item icon="angle right" content={<a>https://en.wikipedia.org/wiki/Ruby_on_Rails</a>} />
            <List.Item icon="angle right" content={<a>https://react.semantic-ui.com</a>} />
          </List>
        </Container>
      </Segment>
    )
  }
}

export default References