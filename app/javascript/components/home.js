import React from 'react'
import { Segment } from 'semantic-ui-react'

class Home extends React.Component {
  componentDidMount() {
    document.title = "CPS 530 Project";
  };

  render() {
    return(
      <Segment>
        This is the CPS530 project page and stuff.
      </Segment>
    )
  }
}

export default Home