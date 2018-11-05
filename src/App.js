import React, { Component } from 'react'
import 'typeface-roboto'
import './App.css'

import MediaQuery from 'react-responsive'

import theme from './theme'
import { MuiThemeProvider, Typography, IconButton } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

import Menu from '@material-ui/icons/Menu'
import Games from '@material-ui/icons/Games'
import GroupAdd from '@material-ui/icons/GroupAdd'
import Radio from '@material-ui/icons/Radio'
import Info from '@material-ui/icons/Info'

import Jogos from './Pages/Jogos'
import Sobre from './Pages/Sobre'
import Ptdc from './Pages/Ptdc'
import Psel from './Pages/Psel'

import allGames from './allGames'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

const styles = {
  root: {
    width: '100%'
  },
  toolbar: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  icon: {
    marginRight: 8,
  },
  image: {
    height: '70%',
    padding: 16,
  },
  image2: {
    width: '70%',
    padding: 16,
  },
  titles: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 32,
  },
  button: {
    marginTop: 32,
  },
  appBarButton: {
    marginLeft: 16,
  }
}

const Home = () => 
<MuiThemeProvider theme={theme}>
  <div className="App">
    <header className="App-header">
      <div className="page-body">
          <div className="name-n-logo">
            <MediaQuery minWidth={600}>
              <img style={styles.image} src={require('./Images/brasao.png')} alt="Brasão" />
            </MediaQuery>
            <MediaQuery maxWidth={599}>
              <img style={styles.image2} src={require('./Images/brasao.png')} alt="Brasão" />
            </MediaQuery>
            
            <div style={styles.titles}>
              <MediaQuery minWidth={1600}>
                <Typography style={{fontSize: '4em'}} variant="display4" gutterBottom>Fellowship of the Game</Typography>
                <Typography style={{fontSize: '1.4em'}} variant="display1" gutterBottom>Grupo de extensão de desenvolvimento de jogos - ICMC - USP</Typography>
              </MediaQuery>
              <MediaQuery minWidth={1280} maxWidth={1599}>
                <Typography style={{fontSize: '3em'}} variant="display4" gutterBottom>Fellowship of the Game</Typography>
                <Typography style={{fontSize: '1em'}} variant="display1" gutterBottom>Grupo de extensão de desenvolvimento de jogos - ICMC - USP</Typography>
              </MediaQuery>
              <MediaQuery maxWidth={1279}>
                <Typography style={{fontSize: '2em'}} variant="display4" gutterBottom>Fellowship of the Game</Typography>
                <Typography style={{fontSize: '1em'}} variant="display1">Grupo de extensão de desenvolvimento de jogos - ICMC - USP</Typography>
              </MediaQuery>

              <Button onClick={() => window.location.href="/sobre"} style={styles.button} variant="contained" color="secondary" size="large" >
                Saiba mais
              </Button>
            </div>
          </div>

      </div>
    </header>
  </div>
</MuiThemeProvider>

class App extends Component {

  componentWillMount(){

    console.log('allgames: ', allGames.games)
    
    /*      investigate issue
    fetch('https://itch.io/api/1/'+process.env.REACT_APP_API_KEY+'/my-games')
    .then(response => response.json())
    .then(parsedJSON => {
        console.log(parsedJSON)
    }).catch(err => console.log(err))
     */
  }

  render() {
    return (
      <Router>
        <div><MuiThemeProvider theme={theme}>
          <div style={styles.root}>
            <AppBar color="primary" position="static">
              <Toolbar style={styles.toolbar}>
                <MediaQuery minWidth={980}>
                  <div>
                    <Button onClick={() => window.location.href="/sobre"} style={styles.appBarButton} color="inherit">
                      <Info style={styles.icon} />
                      Sobre
                    </Button>
                    <Button onClick={() => window.location.href="/jogos"} style={styles.appBarButton} color="inherit">
                      <Games style={styles.icon} />
                      Jogos
                    </Button>
                    <Button onClick={() => window.location.href="/ptdc"} style={styles.appBarButton} color="inherit">
                      <Radio style={styles.icon} />
                      PTDC
                    </Button>
                    <Button onClick={() => window.location.href="/psel"} style={styles.appBarButton} color="inherit">
                      <GroupAdd style={styles.icon} />
                      Processo Seletivo
                    </Button>
                  </div>
                </MediaQuery>
                <MediaQuery maxWidth={979}>
                  <IconButton color="inherit">
                    <Menu />
                  </IconButton>
                </MediaQuery>

              </Toolbar>
            </AppBar>
          </div>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/jogos/" component={Jogos} />
            <Route path="/ptdc/" component={Ptdc} />
            <Route path="/psel/" component={Psel} />
          </Switch>

        </MuiThemeProvider></div>
      </Router>
    )
  }
}

export default App;
