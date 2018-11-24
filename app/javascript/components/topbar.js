import React from 'react'
import { Menu, Flag } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class TopBar extends React.Component {
  render() {
    return(
        <Menu attached="top" inverted>
          <Link to="/">
            <Menu.Item as="h3" link header>
              <Flag name="canada"/>
              CPS 530 Term Project
            </Menu.Item>
          </Link>
          <Menu.Item>
            <Link to="/about">
              Installation
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/about">
              Creating a Page
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/about">
              Page
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/about">
              Credits
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/references">
              References
            </Link>
          </Menu.Item>
        </Menu>
    )
  }
}

export default TopBar