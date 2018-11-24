import React from 'react'
import { Menu, Flag } from 'semantic-ui-react'

class TopBar extends React.Component {
  render() {
    return(
        <Menu fixed="top" inverted>
          <Menu.Item as="a" header href="/">
            <Flag name="canada"/>
            CPS 530 Term Project
          </Menu.Item>
          <Menu.Item href="/about">
            About Us
          </Menu.Item>
        </Menu>
    )
  }
}

export default TopBar