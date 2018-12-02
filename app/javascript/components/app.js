import React from 'react';
import { Route, Switch } from 'react-router-dom'

import { Container } from 'semantic-ui-react'

import Summary from './summary'
import Conclusion from './conclusion'
import Credits from './credits'
import TopBar from './topbar'
import Page from './page';
import Installation from './installation'
import NotFound from './notFound'



class App extends React.Component {
  render () {
    return (
      <div>
        <TopBar/>
        <Switch>
          <Route exact path="/" component={Summary}/>
          <Route exact path="/credits" component={Credits}/>
          <Route exact path="/installation" component={Installation}/>
          <Route exact path="/conclusion" component={Conclusion}/>
          <Route exact path="/page" component={Page}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

export default App