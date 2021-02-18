import React from 'react'
import Pages from './pages/pages'
import {BrowserRouter, Link} from 'react-router-dom'
import {Navbar, Nav, Container} from 'react-bootstrap'

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    )
  }
}
export default App;