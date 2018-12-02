import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class TopBar extends React.Component {

  render() {
    return(
        <Menu attached="top" inverted>
          <Link to="/">
            <Menu.Item as="h3" link header>
              <Icon name="home"/>
              CPS 530 Term Project
            </Menu.Item>
          </Link>
          <Menu.Item>
            <Link to="/">
              Summary
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/installation">
              Installation
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/about">
              Creating a Page
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/page">
              Page
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/conclusion">
              Conclusion
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/credits">
              Credits
            </Link>
          </Menu.Item>
        </Menu>
    )
  }
}

export default TopBar