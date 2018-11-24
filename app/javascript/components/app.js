import React from 'react';
import { Route, Switch } from 'react-router-dom'

import { Container } from 'semantic-ui-react'

import Home from './home'
import About from './about'
import References from './references'
import TopBar from './topbar'


class App extends React.Component {
  render () {
    return (
      <div>
        <TopBar/>
        <Container>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/references" component={References}/>
        </Switch>
        </Container>
      </div>
    )
  }
}

export default App