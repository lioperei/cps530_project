import React from 'react';
import { Route, Switch } from 'react-router-dom'

import { Container } from 'semantic-ui-react'

import Home from './home'
import About from './about'
import Credits from './credits'
import TopBar from './topbar'
import Installation from './installation'
import NotFound from './notFound'

class App extends React.Component {
  render () {
    return (
      <div>
        <TopBar/>
        <Container>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/credits" component={Credits}/>
          <Route exact path="/installation" component={Installation}/>
          <Route component={NotFound}/>
        </Switch>
        </Container>
      </div>
    )
  }
}

export default App